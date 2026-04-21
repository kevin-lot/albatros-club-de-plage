import { OpenDaysInterface, PricesInterface } from "@/libs/definitions";

const colLabels = ["", "journée", "1 sem.", "2 sem.", "3 sem.", "4 sem."];

export const beachClubFullDayPrices: PricesInterface = {
    colLabels: colLabels,
    rows: [
        {
            label: "1 enfant",
            prices: ["28 €", "150 €", "220 €", "280 €", "350 €"],
        },
        {
            label: "2 enfants",
            prices: ["45 €", "240 €", "380 €", "480 €", "600 €"],
        },
        {
            label: "3 enfants",
            prices: ["65 €", "300 €", "480 €", "650 €", "760 €"],
        },
        {
            label: "4 enfants",
            prices: ["80 €", "350 €", "550 €", "790 €", "1000 €"],
        },
        {
            label: "5 enfants",
            prices: ["95 €", "380 €", "600 €", "820 €", "1050 €"],
        },
    ],
} as const;
export const beachClubHalfDayPrices: PricesInterface = {
    colLabels: colLabels,
    rows: [
        {
            label: "1 enfant",
            prices: ["20 €", "110 €", "190 €", "260 €", "310 €"],
        },
        {
            label: "2 enfants",
            prices: ["35 €", "190 €", "290 €", "400 €", "490 €"],
        },
        {
            label: "3 enfants",
            prices: ["55 €", "240 €", "400 €", "550 €", "720 €"],
        },
        {
            label: "4 enfants",
            prices: ["70 €", "300 €", "540 €", "780 €", "980 €"],
        },
        {
            label: "5 enfants",
            prices: ["85 €", "350 €", "580 €", "800 €", "1020 €"],
        },
    ],
} as const;

export const beachClubOpenDays: OpenDaysInterface = {
    rows: [
        {
            label: "lundi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "mardi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "mercredi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "jeudi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "vendredi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "samedi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "dimanche",
            openHours: [false, null],
        },
    ],
} as const;
