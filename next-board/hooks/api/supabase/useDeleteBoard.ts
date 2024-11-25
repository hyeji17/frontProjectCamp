"use client"

import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { taskAtom } from "@/stores/atoms";
import { Board } from "@/types";
import { useAtom } from "jotai";
import { useGetTaskById } from "./useGetTaskById";

function useDeleteBoard(taskId: number, boardId: string) {
    const { toast } = useToast();
    const [task, setTask] = useAtom(taskAtom);
    const { getTaskById } = useGetTaskById(taskId);

    const deleteBoard = async () => {
        try {
            const { status, error } = await supabase
                .from("todos")
                .update({
                    boards: task?.boards.filter(
                        (board: Board) => board.id !== boardId
                    ),
                })
                .eq("id", taskId);

            if (status === 204) {
                toast({
                    title: "선택한 TODO-BOARD가 삭제되었습니다.",
                    description:
                        "새로운 할 일이 생기면 TODO-BOARD를 생성해주세요!",
                });

                /**task 갱신 */
                getTaskById();
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
        } catch (err) {
            /** 네트워크 오류나 예기치 않은 에러를 잡기 위해 catch 구문 사용 */
            toast({
                variant: "destructive",
                title: "네트워크 오류",
                description: "서버와 연결할 수 없습니다. 다시 시도해주세요!",
            });
            console.error("API 호출 중 오류 발생:", err);
        }
    };
    return deleteBoard;
}

export { useDeleteBoard };
