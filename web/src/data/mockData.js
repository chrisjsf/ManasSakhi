export const feedContent = {
  calm: [
    {
      id: "c1",
      title: "Daily Journal",
      text: "Reflect on your present moment.",
      actionText: "Write",
      type: "journal",
      route: "/journal"
    },
    {
      id: "c2",
      title: "Mindful Walking",
      text: "A 10-minute guided audio for your evening stroll.",
      actionText: "Listen",
      type: "audio",
      route: "/audio"
    },
    {
       id: "c3",
       title: "Gratitude Check-in",
       text: "What are 3 things you are grateful for today?",
       actionText: "Start",
       type: "exercise",
       route: "/gratitude"
    }
  ],
  stressed: [
    {
      id: "s1",
      title: "Deep Breathing Focus",
      text: "You seem tense. Let's take a minute to breathe.",
      actionText: "Try Now",
      type: "intervention",
      route: "/breathing"
    },
    {
      id: "s2",
      title: "Grounding Technique",
      text: "5-4-3-2-1 exercise to bring you back to the present.",
      actionText: "Start",
      type: "exercise",
      route: "/grounding"
    },
     {
      id: "s3",
      title: "Talk to Someone",
      text: "Reach out to a trusted contact or helpline.",
      actionText: "Connect",
      type: "contact",
      route: "/contact"
    }
  ]
};

export const userProfile = {
  name: "Friend",
  avatar: "👋" // Using emoji as placeholder icon
};
