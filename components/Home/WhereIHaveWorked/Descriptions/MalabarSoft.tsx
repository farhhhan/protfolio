import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function MalabarSoft() {
    const tasks = [
        {
            text: "Developed and deployed cross-platform mobile applications using Flutter, delivering seamless user experiences on both iOS and Android platforms.",
            keywords: ["Flutter", "cross-platform", "iOS", "Android", "mobile applications"],
        },
        {
            text: "Built responsive web applications with Next.js, implementing modern UI/UX designs and optimizing performance for enhanced user engagement.",
            keywords: ["Next.js", "web applications", "UI/UX", "performance optimization"],
        },
        {
            text: "Successfully published and managed applications on Apple App Store and Google Play Store, ensuring compliance with platform guidelines and best practices.",
            keywords: ["App Store", "Play Store", "publishing", "compliance"],
        },
        {
            text: "Integrated AdMob advertising solutions to monetize applications while maintaining optimal user experience and ad placement strategies.",
            keywords: ["AdMob", "monetization", "advertising", "revenue optimization"],
        },
        {
            text: "Managed domain hosting and deployment using GoDaddy, configuring DNS settings and ensuring reliable application availability.",
            keywords: ["GoDaddy", "domain hosting", "DNS", "deployment"],
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Flutter Developer <span className="text-AAsecondary">@ MalabarSoft LLC</span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">2023 - 2024 (1+ year)</span>
                </div>
                <div className="flex flex-col space-y-4 sm:text-sm text-xs">
                    {tasks.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row space-x-2">
                                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                                <span
                                    className="text-gray-500 sm:text-sm text-xs"
                                    dangerouslySetInnerHTML={{
                                        __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                                    }}
                                ></span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
