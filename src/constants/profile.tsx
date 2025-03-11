// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Github, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Vladyslav Hutsu",
    headline: ["Root System", "Perazam", "Levenue"],
    avatarSrc: "/assets/images/me-avatar.png",
    info: [
        {
            label: "Location",
            value: "Kyiv, Ukraine",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "20th, Jannuary, 1998",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "EST time zone",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "bh717",
            icon: <Github />,
            link : 'https://github.com/bh717'
        },
    ],
};
