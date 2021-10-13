export interface CarProps {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
}

export interface Cars extends Array<CarProps>{}
