import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Growblic() {
    const tasks = [
        {
            text: "Led the development of multiple Flutter-based mobile applications, architecting scalable solutions and implementing best practices for code quality and maintainability.",
            keywords: ["Flutter", "mobile applications", "architecture", "scalable solutions", "best practices"],
        },
        {
            text: "Developed full-stack web applications using Next.js and React, creating dynamic user interfaces with server-side rendering for optimal SEO and performance.",
            keywords: ["Next.js", "React", "full-stack", "server-side rendering", "SEO"],
        },
        {
            text: "Managed complete app lifecycle from development to deployment on Apple App Store and Google Play Store, handling version updates, bug fixes, and feature releases.",
            keywords: ["App Store", "Play Store", "app lifecycle", "deployment", "version management"],
        },
        {
            text: "Implemented advanced AdMob integration strategies including banner ads, interstitial ads, and rewarded video ads to maximize revenue while maintaining user satisfaction.",
            keywords: ["AdMob", "banner ads", "interstitial ads", "rewarded ads", "revenue optimization"],
        },
        {
            text: "Configured and maintained web hosting infrastructure on GoDaddy, managing SSL certificates, email services, and ensuring 99.9% uptime for client applications.",
            keywords: ["GoDaddy", "web hosting", "SSL certificates", "infrastructure", "uptime"],
        },
        {
            text: "Collaborated with cross-functional teams to deliver projects on time, conducting code reviews and mentoring junior developers in Flutter and modern web development practices.",
            keywords: ["cross-functional teams", "code reviews", "mentoring", "team collaboration"],
        },
    ];

    return (
        <>
            <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
                <div className="flex flex-col spacey-y-2">
                    {/* Title */}
                    <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
                        Senior Flutter Developer <span className="text-AAsecondary">@ Growblic PVT LTD</span>
                    </span>
                    {/* Date */}
                    <span className="font-mono text-xs text-gray-500">2021 - 2023 (2+ years)</span>
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
