import { Card, CardContent, CardDescription, CardHeader } from "@/components";

interface Props {
    label: string;
    description: string;
    imgUrl: string;
    numberData: number;
    unit: string;
}

function GetCardData({ label, description, imgUrl, numberData, unit }: Props) {
    return (
        <Card className="w-full h-fit bg-neutral-50">
            <CardHeader>
                <CardDescription className="font-semibold text-neutral-700">
                    {label}
                    <span className="text-neutral-400 font-normal m1-1">
                        {description}
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <img src={imgUrl} alt="" className="h-10 w-10" />
                <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">
                    {numberData}
                    <span className="text-lg ml-1">{unit}</span>
                </p>
            </CardContent>
        </Card>
    );
}

export { GetCardData };
