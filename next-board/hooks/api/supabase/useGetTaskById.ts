"use client";

import { useAtom } from "jotai";
import { taskAtom } from "@/stores/atoms";
import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

/** Supabase 'todos' 테이블 데이터 중 특정 id값에 따른 특정 Task 정보 조회 */
function useGetTaskById(taskId: number) {
    const { toast } = useToast();
    const [task, setTask] = useAtom(taskAtom);

    const getTaskById = async () => {
        try {
            const { data, status, error } = await supabase
                .from("todos")
                .select("*")
                .eq("id", taskId);

            if (data && status === 200) {
                setTask(data[0]);
            }

            if (error) {
                toast({
                    variant: "destructive",
                    title: "에러가 발생했습니다.",
                    description: `Supabase 오류: ${
                        error.message || "알 수 없는 오류"
                    }`,
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "네트워크 오류",
                description: "서버와 연결할 수 없습니다. 다시 시도해주세요!",
            });
            console.error("API 호출 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        if (taskId) getTaskById();
    }, [taskId]);

    return { task, getTaskById };
}

export { useGetTaskById };
