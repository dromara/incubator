import {defineConfig} from 'vitepress'

const fileAndStyles: Record<string, string> = {}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh',
    title: 'Dromara 孵化器',
    appearance: false,
    head: [
        ['link', {rel: 'icon', href: '/icon.png'}]
    ],
    themeConfig: {
        logo: '/icon.png',
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        },
        nav: [
            {text: '首页', link: '/'},
            {text: '孵化项目', link: '/projects'},
            {
                text: '导师列表',
                link: '/guides/mentor',
            },
            {
                text: '孵化指南',
                items: [
                    {text: '项目管理委员会', link: '/guides/ppmc'},
                    {text: '社区成熟建设指南', link: '/guides/community'},
                ],
            },
            {text: '孵化项目发版', link: '/guides/release'},
            {text: '孵化项目毕业', link: '/guides/graduate'},
            {text: '常见问题解答', link: '/faq'},
        ],
        footer: {
            message: '',
            copyright: 'Copyright © 2024 The dromara.org'
        },
        socialLinks: [
            {
                icon: {
                    svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"20px\" height=\"20px\" viewBox=\"0 0 20 20\" enable-background=\"new 0 0 20 20\" xml:space=\"preserve\">  <image id=\"image0\" width=\"20\" height=\"20\" x=\"0\" y=\"0\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAIGNIUk0AAHomAACAhAAA+gAAAIDo AAB1MAAA6mAAADqYAAAXcJy6UTwAAAIBUExURQAAAMjIyMbGxsyjOM2YEc2UAMjDts2VBMfU9s2T AMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI yMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI yMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIycjJzcjIyMjHxcnDtM2TAM2RAMjDtMjG wsuoTsuqVMq3h82VA82WBs2TAM6MAM2SAMuqVsqwa8yfKM2RAM2TAM2YD82UAM2UAM2WCM2UAM2U AM2UAMycIM2UAM2UAM2TAM2UAcycIMuoTM2TAM2UAM2UAM2RAM2QAM2RAM2UAM2XC82ZE82ZEs2X DM2VBc2UAM2TAM2TAM2UAM2UAM2UAMjIyMjIycjIxsjJy8jHxMumR82YEMm8msm8m8usW8m5kMyc HsnBrsnCr8ukPsyeJ8m4jMjHw8m5j8yhMMq1gcjIysq4i8yjO8nBrcjHwsq4isupUMurWMqyc8q2 hMq4icq2gsqxbsupT8ygMMukP8m5jsq1fsqxccnCscjGwsnBrMqydMqvaMquZsqxcMjEucm9nMuq Vs2YD8qzdsm7lMm+o8q0ecurV8ygLc2XC////3VSHUMAAABwdFJOUwAAAAAAAAAAAAAotCUdDX/6 RAyyYg/HoUg9fP2dOPD59rcGeMIKCbvECy3pwP6ZrgPFpgEg458ZSfeZG7/erB4HY/7R2fjetGAM c+H8oRnsp5H56Qpm0v26GV6n2vX2si0EIU19qMnf7PLw5MydVg9N357GAAAAAWJLR0SqvgZXvgAA AAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+gLHRAnGtjhZXMAAAQhelRYdFJhdyBwcm9maWxl IHR5cGUgeG1wAABYha1YW7KjOgz81ypmCSDJMiyHw+Nvqu7nXf60bEgcYh7JTKhDTrDd3ZJlyYb+ //0f/cKHJSrJGDsZYmdTbGyyENVabvy3jTZH8TaZmK01tcXYggz5+aP3wswNPWHw8MeHhE6n0HCj YkvEQG7EeJYm/bHMzcCNX5DAADcZAquS2o4/N7qGLiquRgZwLjF9eI7oxHOiiLxIK71fvJA0wnjA uE8ZBN8Se8BCdux4cgJvfmrZK1K1QFFM8KBPpvXwwgyFawf4hcENT7hCOOIFqLxiR0+jQgO4zgJ+ T9CiLj+AC3DTianrKCqHwXY42CZ0S+53HyQXQ6fDYZYEA1v0Cnt99CqwnHSHeleSPDY/g2Ejp8Te luznviio3Ke2zTDdYQPZOuiY7tA0+KPzwXeNI+fbBpV8+6jZYudobilN7hAEQD7VgkYEfOrSBgMF R8nxJbOIjLzUoWiNk5tQxyrpMAR30CGm+FcHVswy4mlEu6RxvfsIPLEm1hfKcmzKno7u8Z2b9bZE bpnld0skQWadfMEou2mL/axmtNLxiPttc0oaqvF8FkEZnE6MWIIgdlpB7KZAPdVaDch3uGuNdOUB DSkXMToHU5mDIkADHLBT9zHQkTb6dHaywcHjzPtbqieTzJ6zPRLcE19N+wZMe+Rvpt4JqGAIQbWX LStWV2BcB7+30lo9PNsJZgOVwksjewlHtHuxLM1BT5jj7gdoXzrj3lpbtZ6ZTd841rX6YkKVE+0V QSGRxD+GHcBfzVlk2mP/i1nbp3r+RCXVIP51GvHF2WMYDEahjFioJkEqC/YRR7dSbAFbU0x3HFnk gvz/vO4FeqdA5g4aSEVa/IN8rYEnFVymLU+iinqCbejkLYodMFqBj5nFHRPRCzAxts2hQ3+vJxtK n0dMATymKEy1j/KEW49d9egbTzjzwxjPcHS/lt4q2aiVLQIS7WmKw7b5hFZNS9Qh0Id9I7ZYXBOM Z9fRxs+dfUjXDPS9Ma9BSykNvO3MUFct1dbb6YWq+eWLRUwXwsW6nPS1S/7p8oIo10PW/EmBrIA+ tVIpdj02DOrnpVAAL7hG1P2Kr7jJORxAe9dewdU9Ro9h6wnV1o3xukEOKeXicIj93QQqzwtY+XAS o2gMSBZ+b0SJf/DVpR+veg6BrxQ9DQm31TDuKGYuhqpqqqB1Jdu5ifyw7XXNHemn1xyEwdcRwnMr So+z2WFvyt3P2aDRNz39mh2LxJM3qDmxnXa8Igj9ppBKib4ZSG8B2p05fc2gVxqq8nT1gQc0qTed 8zxpHkfT4v1AwLYDz9LmjIosZIiJ6GxXg2oJhi5ZuxoAoo9fSel60P7VCi/ly5Xt3Qo9X66Ub4ae nf3dEEoz2nLs719apcT/B3GTS4hO/VjoAAAAAW9yTlQBz6J3mgAAAR1JREFUGNNjYAABRkYubh5G RkZePkZGBhhgZOQXEGRkFBIWQRYUFSsQl5CUkpZBCDIyysoVFMgrSBcoKsEFmRiVCyBARRWhUk0d KqihyQjXraUNFdRRQwiK6EIFEWYyMupBxQr0DeCCfIYwQSNjRogyRkYTU5igGRNU0NxC2RImaMXM wsrKwMBmbWNqCxMrtLN3YAeKcjg6ObsUQQWLXd3cPTw5Gby8S0rLyouhghWVVT6+fgz+1TW1dfUN jcUgUNjU3NLaFsAQGNTe0dnV3dPb1z9h4qTJU6YWTAtmCAkNC58+Y+ashtlz5s7rmjV/wcJFEQys rJFR0TGxi5csXbqgatnyFSvj4hOAgqysiUnJKalp6RmZWdk5uXn5rADCXWWho1QI1AAAAMZlWElm TU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIA AAExAAIAAAAWAAAAZodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABUGl4ZWxtYXRvciBQ cm8gMy42LjEwAAAEkAQAAgAAABQAAACyoAEAAwAAAAEAAQAAoAIABAAAAAEAAAM7oAMABAAAAAEA AAJ9AAAAADIwMjQ6MTE6MjkgMjM6NDI6MzYAD0oZlAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0x MS0yOVQxNjozOToyNiswMDowMJIXkdIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMTEtMjlUMTY6 Mzk6MjYrMDA6MDDjSiluAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTExLTI5VDE2OjM5OjI2 KzAwOjAwtF8IsQAAABF0RVh0ZXhpZjpDb2xvclNwYWNlADEPmwJJAAAAKnRFWHRleGlmOkRhdGVU aW1lRGlnaXRpemVkADIwMjQ6MTE6MjkgMjM6NDI6MzbJx0c8AAAAE3RFWHRleGlmOkV4aWZPZmZz ZXQAMTI0qBfuEAAAABh0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24AODI35bGMwwAAABh0RVh0ZXhp ZjpQaXhlbFlEaW1lbnNpb24ANjM3aztx/gAAACN0RVh0ZXhpZjpTb2Z0d2FyZQBQaXhlbG1hdG9y IFBybyAzLjYuMTD2Hj05AAAANXRFWHRQaXhlbG1hdG9yVGVhbTpTaWRlY2FyQmFzZUZpbGVuYW1l AGRyb21hcmEtbG9nby1zbWFsbPxYHwwAAAAjdEVYdFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJEYXRh VmVyc2lvbgAzV+10rwAAACJ0RVh0UGl4ZWxtYXRvclRlYW06U2lkZWNhckVuYWJsZWQAVHJ1ZYdd Tp8AAABFdEVYdFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJJZGVudGlmaWVyAEVFQzFFQThFLUNDRkEt NEJBNi04RUI3LUVGRDVGMjk2RjFBML4DzTkAAAAldEVYdFBpeGVsbWF0b3JUZWFtOlNpZGVjYXJM b2NhdGlvbgBpQ2xvdWRxUojTAAAAKHRFWHRQaXhlbG1hdG9yVGVhbTpTaWRlY2FyU2hvcnRIYXNo AEVFQzFFQThF5SEByQAAAFN0RVh0UGl4ZWxtYXRvclRlYW06U2lkZWNhclVUSQBjb20ucGl4ZWxt YXRvcnRlYW0ucGl4ZWxtYXRvci5kb2N1bWVudC1wcm8tc2lkZWNhci5iaW5hcnliPETaAAAAH3RF WHRQaXhlbG1hdG9yVGVhbTpTaWRlY2FyVmVyc2lvbgAy114zawAAADV0RVh0UGl4ZWxtYXRvclRl YW06U2lkZWNhcldyaXRlckFwcGxpY2F0aW9uAHBpeGVsbWF0b3JQcm+NlAJCAAAAKXRFWHRQaXhl bG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyQnVpbGQAZjdlNjU1Zewt+nAAAAAxdEVYdFBpeGVsbWF0 b3JUZWFtOlNpZGVjYXJXcml0ZXJEZXZpY2UATWFjQm9va1BybzE4LDG3HGQcAAAAJXRFWHRQaXhl bG1hdG9yVGVhbTpTaWRlY2FyV3JpdGVyT1MAMTUuMS4xO1mJmQAAACp0RVh0UGl4ZWxtYXRvclRl YW06U2lkZWNhcldyaXRlclBsYXRmb3JtAG1hY09TekrFCgAAACt0RVh0UGl4ZWxtYXRvclRlYW06 U2lkZWNhcldyaXRlclByb2Nlc3NJRAA3MzM2MMgdFKwAAAAqdEVYdFBpeGVsbWF0b3JUZWFtOlNp ZGVjYXJXcml0ZXJWZXJzaW9uADMuNi4xMLH85p8AAAASdEVYdHRpZmY6T3JpZW50YXRpb24AMber /DsAAAAodEVYdHhtcDpDcmVhdGVEYXRlADIwMjQtMTEtMjlUMjM6NDI6MzYrMDg6MDDipQtKAAAA JXRFWHR4bXA6Q3JlYXRvclRvb2wAUGl4ZWxtYXRvciBQcm8gMy42LjEwwGsoXgAAACp0RVh0eG1w Ok1ldGFkYXRhRGF0ZQAyMDI0LTExLTI5VDIzOjQzOjA0KzA4OjAwnC0ZOQAAABd0RVh0eG1wOlBp eGVsWERpbWVuc2lvbgA4Mjf/vsFOAAAAF3RFWHR4bXA6UGl4ZWxZRGltZW5zaW9uADYzN3E0PHMA AAAASUVORK5CYII=\"/>\n" +
                        "<script xmlns=\"\"/></svg>"
                },
                link: 'https://dromara.org',
                ariaLabel: "Dromara"
            },
            {
                icon: {
                    svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"Group\" viewBox=\"0 0 89.7088726 89.7088726\" width=\"20\" height=\"20\">\n" +
                        "    <g>\n" +
                        "        <circle id=\"Combined-Shape\" fill=\"#C71D23\" cx=\"44.8544363\" cy=\"44.8544363\" r=\"44.8544363\"/>\n" +
                        "        <path d=\"M67.558546,39.8714292 L42.0857966,39.8714292 C40.8627004,39.8720094 39.8710953,40.8633548 39.8701949,42.0864508 L39.8687448,47.623783 C39.867826,48.8471055 40.8592652,49.8390642 42.0825879,49.8393845 C42.0827874,49.8393846 42.0829869,49.8393846 42.0831864,49.8387862 L57.5909484,49.838657 C58.8142711,49.8386283 59.8059783,50.830319 59.8059885,52.0536417 C59.8059885,52.0536479 59.8059885,52.053654 59.8059701,52.0536602 L59.8059701,52.6073539 L59.8059701,52.6073539 L59.8059701,53.161115 C59.8059701,56.8310831 56.8308731,59.80618 53.160905,59.80618 L32.1165505,59.80618 C30.8934034,59.806119 29.9018373,58.8145802 29.9017425,57.5914331 L29.9011625,36.5491188 C29.9008781,32.8791508 32.8758931,29.9039718 36.5458611,29.9038706 C36.5459222,29.9038706 36.5459833,29.9038706 36.5460443,29.9040538 L67.5523638,29.9040538 C68.77515,29.9026795 69.7666266,28.9118177 69.7687593,27.6890325 L69.7721938,22.1516997 C69.774326,20.928378 68.7832423,19.9360642 67.5599198,19.9353054 C67.5594619,19.9353051 67.5590039,19.935305 67.558546,19.9366784 L36.5479677,19.9366784 C27.3730474,19.9366784 19.935305,27.3744208 19.935305,36.549341 L19.935305,67.558546 C19.935305,68.7818687 20.927004,69.7735676 22.1503267,69.7735676 L54.8224984,69.7735676 C63.079746,69.7735676 69.7735676,63.079746 69.7735676,54.8224984 L69.7735676,42.0864509 C69.7735676,40.8631282 68.7818687,39.8714292 67.558546,39.8714292 Z\" id=\"G\" fill=\"#FFFFFF\"/>\n" +
                        "    </g>\n" +
                        "</svg>"
                },
                link: 'https://gitee.com/dromara',
                ariaLabel: "Gitee"
            },
            {
                icon: "github",
                link: 'https://github.com/dromara',
                ariaLabel: "GitHub"
            },
        ]
    },
    vite: {
        ssr: {
            noExternal: ['naive-ui', 'date-fns', 'vueuc']
        }
    },
    postRender(context) {
        const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
        const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
        const style = styleRegex.exec(context.content)?.[1]
        const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
        if (vitepressPath && style) {
            fileAndStyles[vitepressPath] = style
        }
        context.content = context.content.replace(styleRegex, '')
        context.content = context.content.replace(vitepressPathRegex, '')
    },
    transformHtml(code, id) {
        const html = id.split('/').pop()
        if (!html)
            return
        const style = fileAndStyles[`/${html}`]
        if (style) {
            return code.replace(/<\/head>/, `${style}</head>`)
        }
    },
    ignoreDeadLinks: true,
})
