export interface Contact {
    type: 'email' | 'phone' | 'wechat' | 'qq';
    value: string;
}

export interface TeamMember {
    name: string;
    avatar: string;
    introduction?: string;
    contacts: Contact[];
}

export const mentors: TeamMember[] = [
    {
        name: "肖宇",
        avatar: "/mentor/肖宇.png",
        contacts: [
            {type: "wechat", value: "xixy199195"}
        ]
    },
    {
        name: "巩超",
        avatar: "/mentor/巩超.png",
        contacts: [
            {type: "wechat", value: "tomsun28"}
        ]
    },
    {
        name: "阿超",
        avatar: "/mentor/阿超.png",
        contacts: [
            {type: "wechat", value: "apacheachao"}
        ]
    },
    {
        name: "何凤恩",
        avatar: "/mentor/何凤恩.png",
        contacts: [
            {type: "wechat", value: "yijia1949"}
        ]
    },
    {
        name: "李楠",
        avatar: "/mentor/李楠.png",
        contacts: [
            {type: "wechat", value: "im2813886842"}
        ]
    },
    {
        name: "唐振超",
        avatar: "/mentor/唐振超.png",
        contacts: [
            {type: "wechat", value: "tangzhenchao"}
        ]
    },
    {
        name: "江冬勤",
        avatar: "/mentor/江冬勤.png",
        contacts: [
            {type: "wechat", value: "jadon202201"}
        ]
    },
    {
        name: "木冉",
        avatar: "/mentor/木冉.png",
        contacts: [
            {type: "wechat", value: "tianaiyouqing"}
        ]
    }
];
