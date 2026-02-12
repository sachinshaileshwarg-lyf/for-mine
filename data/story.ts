export type StoryChapter = {
    id: number;
    title?: string;
    image?: string;
    text: string;
    type: "cover" | "book-page" | "surprise-vhs" | "surprise-letter" | "surprise-gift" | "countdown" | "ending";
};

export const storyChapters: StoryChapter[] = [
    {
        id: 0,
        text: "Our Love Story",
        type: "cover",
    },
    {
        id: 1,
        title: "About Our Love",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1000&auto=format&fit=crop",
        text: "It's the kind of love that feels like coming home. Gentle, patient, and kind. Every day with you is a page I never want to turn away from.",
        type: "book-page",
    },
    {
        id: 2,
        title: "Her Love",
        image: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?q=80&w=1000&auto=format&fit=crop",
        text: "Her love is like the morning sun—warm, bright, and full of hope. It heals the parts of me I didn't know were broken.",
        type: "book-page",
    },
    {
        id: 3,
        text: "A special moment frozen in time...",
        type: "surprise-vhs",
    },
    {
        id: 4,
        text: "There are things I've always wanted to say...",
        type: "surprise-letter",
    },
    {
        id: 5,
        text: "A small surprise, just for you.",
        type: "surprise-gift",
    },
    {
        id: 6,
        text: "",
        type: "countdown",
    },
    {
        id: 7,
        text: "And so, our story continues...",
        type: "ending",
    },
];
