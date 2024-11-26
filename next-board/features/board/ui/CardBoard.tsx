import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
/** FSD 컴포넌트 */
import { MarkdownEditorDialog } from "@/features";
import {
    Button,
    Card,
    Checkbox,
    LabelDatePicker,
    Separator,
} from "@/shared/ui";
import { ChevronUp } from "lucide-react";
/** 타입 */
import { Task, Board } from "@/types";
import { useDeleteBoard } from "@/hooks/api";

interface Props {
    board: Board;
}

function CardBoard({ board }: Props) {
    const { id } = useParams();

    /**TASK의 개별 TODO-BOARD 삭제 */
    const handleDeleteBoard = useDeleteBoard(Number(id), board.id);

    return (
        <Card className="w-full flex flex-col items-center p-5">
            {/* 게시물 카드 제목 영역*/}
            <div className="w-full flex items-center justify-between mb-4">
                <div className="w-full flex items-center justify-start gap-2">
                    <Checkbox className="h-5 w-5" checked={board.isCompleted} />
                    <input
                        type="text"
                        placeholder="등록된 제목이 없습니다."
                        value={board.title}
                        className="w-full text-xl outline-none bg-transparent"
                    />
                </div>
                <Button variant={"ghost"} size={"icon"}>
                    <ChevronUp className="text-[#6d6d6d]" />
                </Button>
            </div>
            {/* 캘린더 및 버튼 박스 영역 */}
            <div className="w-full flex items-center justify-between">
                {/* 캘린더 박스 */}
                <div className="flex items-center gap-5">
                    <LabelDatePicker
                        label={"From"}
                        isReadOnly={true}
                        value={board.startDate}
                    />
                    <LabelDatePicker
                        label={"To"}
                        isReadOnly={true}
                        value={board.endDate}
                    />
                </div>
                {/* 버튼 박스 */}
                <div className="flex items-center">
                    <Button
                        variant={"ghost"}
                        className="font-normal text-[#6D6D6D]"
                    >
                        Duplicate
                    </Button>
                    <Button
                        variant={"ghost"}
                        className="font-normal text-rose-600 hover:text-rose-600 hover:bg-red-50"
                        onClick={handleDeleteBoard}
                    >
                        Delete
                    </Button>
                </div>
            </div>
            <Separator className="my-3" />
            {/* Add Contents 버튼 영역 */}
            <MarkdownEditorDialog board={board}>
                <Button
                    variant={"ghost"}
                    className="font-normal text-[#6D6D6D]"
                >
                    {board.title ? "update contents" : "Add Contents"}
                </Button>
            </MarkdownEditorDialog>
        </Card>
    );
}

export { CardBoard };
