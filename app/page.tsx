import Image from 'next/image';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import FlowFieldSketch from '@/components/flow-field-sketch';

export default function Home() {
    return (
        <>
            <div className="container flex items-center justify-center mt-7 p-6 border-primary">
                <span className="w-fit h-fit text-3xl font-extrabold text-black hover:scale-95 text-center">
                    Code Vibes
                </span>
            </div>
            <Card className="flex flex-col items-center justify-center w-full h-full">
                <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center w-full h-fit">
                    <FlowFieldSketch />
                </CardContent>
            </Card>
        </>
    );
}
