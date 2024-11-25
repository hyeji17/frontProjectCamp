export interface Task {
    id: number;
    title: string;
    startDate: string | Date;
    endDate: string | Date;
    boards: BoardContent[];
}

export interface BoardContent {
    boardId: string;
    isCompleted: boolean;
    title: string;
    startDate: Date | null;
    endDate: Date | null;
    content: string;
  }