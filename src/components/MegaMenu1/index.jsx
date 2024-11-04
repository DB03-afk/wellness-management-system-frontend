import { Text } from "../../components";
import React from "react";

export default function MegaMenu1() {
    return (
        <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
            <div className="w-full rounded-lg bg-default-white p-5 shadow-sm">
                <div className="flex gap-[30px]">
                    <div className="flex flex-col items-start gap-4 sm:gap-4">
                        <Text className="text-[18px] font-bold text-color_black-900_01 sm:text-[15px]">Title 1</Text>
                        <a href="#" className="sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 1</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 2</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 3</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 4</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 5</Text>
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-4 sm:gap-4">
                        <Text className="text-[18px] font-bold text-color_black-900_01 sm:text-[15px]">Title 1</Text>
                        <a href="#">
                            <Text className="text-[16px] font-normal text-black_600">Menu 1</Text>
                        </a>
                        <Text className="self-center text-[16px] font-normal text-black_600 sm:text-[13px]">Menu 2</Text>
                        <Text className="self-center text-[16px] font-normal text-black_600 sm:text-[13px]">Menu 3</Text>
                        <Text className="self-center text-[16px] font-normal text-black_600 sm:text-[13px]">Menu 4</Text>
                        <a href="#">
                            <Text className="text-[16px] font-normal text-black_600">Menu 5</Text>
                        </a>
                    </div>
                    <div className="flex flex-col items-start gap-4 sm:gap-4">
                        <Text className="text-[18px] font-bold text-color_black-900_01 sm:text-[15px]">Title 2</Text>
                        <a href="#">
                            <Text className="text-[16px] font-normal text-black_600">Menu 1</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 2</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 3</Text>
                        </a>
                        <a href="#" className="self-center sm:text-[13px]">
                            <Text className="text-[16px] font-normal text-black_600">Menu 4</Text>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}