const projectLocale = {

    POPULAR_TOOLS: "流行工具",
    IMAGE_COMBINER_DESC: "Java服务端图片合成工具",
    WEMQ_DESC: "WeMQ是一款面向物联网设备运营商的开源物联网设备调试系统，提供集成设备管理、MQTT服务器管理、客户管理等功能，自研Nmqs通信层组件，实现了连接信息的加密，保证了数据的安全性。",
    ELECTRON_EGG_DESC: "一个入门简单、跨平台、企业级桌面软件开发框架",
    EASY_TRANS_DESC: "一个注解搞定数据翻译,减少30%SQL代码量",
    FAST_REQUEST_DESC: "基于jetbrains intellij idea的postman插件",
    REDISFRONT_DESC: "一款开源跨平台Redis 桌面客户端工具",
    X_EASYPDF_DESC: "一个用搭积木的方式构建pdf的框架（基于pdfbox）",
    GOBRS_ASYNC_DESC: "一款功能强大、配置灵活、带有全链路异常回调、内存优化、异常状态管理于一身的高性能异步编排框架",
    DYJAVA: "DyJava是一款功能强大的抖音Java开发工具包（SDK），支持抖音各个应用OpenAPI快速调用，包括但不限于移动/网站应用、抖音开放平台、抖店和抖音小程序等",
    ORION_VISOR: "一款高颜值、现代化的智能运维&轻量堡垒机平台。",
    WARM_FLOW: "国产工作流引擎,其特点简洁轻量但又不简单，五脏俱全，组件独立，可扩展，可满足中小项目的组件.解决flowable和activities复杂、学习成本高和集成难等痛点。",
    DBSWITCH: "异构数据库迁移同步(搬家)工具",
    SKYEYE_OA: "智能制造一体化，采用Springboot + winUI的低代码平台开发模式",
    EASYAI: "国内人气最高的Java人工智能算法框架(java版pytorch)。它可以Maven一键丝滑引入我们的Java项目，无需任何额外的环境配置与依赖，做到开箱即用",
    MYBATIS_PLUS_EXT: "mybatis-plus框架的拓展包，在框架原有基础上做了进一步的轻度封装，增强内容：免手写Mapper、多数据源自动建表、数据自动填充、自动关联查询、冗余数据自动更新、动态查询条件等。",
    EASY_QUERY: "一款java下面支持强类型、轻量级、高性能的ORM",
    TIANAI_CAPTCHA: "可能是java界最好的开源行为验证码, [滑块验证码、点选验证码、行为验证码、旋转验证码，滑动验证码]",
    DAX_PAY: "DaxPay是一款免费开源的支付系统，支持支付宝、微信、云闪付等通道",
    MYFLY_GO: "web 版 linux(终端[终端回放] 文件 脚本 进程 计划任务)、数据库（mysql postgres oracle sqlserver 达梦 高斯 sqlite）、redis(单机 哨兵 集群)、mongo 等集工单流程审批于一体的统一管理操作平台",
    MILVUSPLUS: "使用MyBatisPlus的方式，优雅的操作向量数据库 Milvus，同时支持spring和solon",
    NEWCAR: "基于CanvasKit-WASM的现代化动画引擎",
    UJCMS: "支持无头CMS，支持自定义字段及字段可视化设计。可免费用于商业网站",
    BINLOG4J_DESC: "基于 Java 轻量级的 Mysql Binlog 客户端。",
    SMS4J_DESC: "SMS4J为短信聚合框架，帮您轻松集成多家短信服务。",
    STREAM_QUERY_DESC: "允许完全摆脱Mapper的mybatis-plus体验！",
    PAYMENT_SPRING_BOOT_DESC: "最全最好用的微信支付V3 Spring Boot 组件。",
    NEUTRINO_PROXY_DESC: "一个基于netty的、开源的java内网穿透项目。",
    TESTHUB_DESC: "TestHub 是一款基于流程编排的自动化测试工具。",
    DOMAIN_ADMIN_DESC: "域名SSL证书监测平台、SSL证书申请自动续签。",
    YFT_DESIGN_DESC: "基于Canvas的开源版“创客贴”。",
    ZYPLAYER_DOC_DESC:
        "一款适合团队和个人私有化部署使用的知识库、笔记、WIKI文档管理工具。",
    X_FILE_STORAGE_DESC: "一站式文件存储，聚合对接所有主流存储平台。",

    OPERATIONS_AND_MAINTENANCE_CONTROL: "运维管控",

    BIG_DATA: "大数据",
    CLOUDEON_DESC:
        "一款基于kubernetes的云原生大数据平台，致力于简化k8s上大数据集群的运维管理。",
    DATA_COMPARE_DESC: "数据库比对工具: hive 表数据比对，mysql、Doris 数据比对。",

    MICROSERVICE: "微服务",
    LAMP_CLOUD_DESC: "专注于多租户(SaaS架构)解决方案的微服务中后台快速开发平台",
    DANTE_CLOUD_DESC:
        "基于 Spring Authorization Server 全新适配 OAuth 2.1 协议的企业级微服务架构",
    OPEN_CAPACITY_PLATFORM_DESC: "基于Spring Cloud的企业级微服务框架",
    RUOYI_VUE_PLUS_DESC:
        "后台管理系统 重写RuoYi-Vue所有功能 集成 Sa-Token+Mybatis-Plus+Jackson+Xxl-Job+SpringDoc+Hutool+OSS",
    J2EEFAST_DESC: "J2eeFAST 是一个 Java EE 企业级快速开发平台。",

    DISTRIBUTED_SCHEDULING: "分布式调度",
    HODOR_DESC: "分布式调度框架",
    DISJOB_DESC: "一个分布式的任务调度框架。",
    CARBON_DESC: "一个轻量级、语义化、对开发者友好的 golang 时间处理库"
};

export const projectGroups = [
    {
        name: projectLocale.POPULAR_TOOLS,
        projects: [
            {
                name: "mica-mqtt",
                website: "https://iot.bladex.cn",
                description: "java mqtt 基于 java aio 实现，开源、简单、易用、低延迟、高性能百万级 java mqtt client 组件和 java mqtt broker 服务",
                sponsor: "dreamlu",
                date: "2021.03",
                link: `
                    <a href="https://gitee.com/dromara/mica-mqtt"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/mica-mqtt/badge/star.svg"></a>
`
            },
            {
                name: "dongle",
                website: "https://pkg.go.dev/gitee.com/dromara/dongle",
                description: "轻量级、语义化、对开发者友好的 golang 编码解码、加密解密和签名验签库",
                sponsor: "gouguoyin",
                date: "2021.03",
                link: `
  <a href="https://gitee.com/dromara/dongle"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/dongle/badge/star.svg"></a>
  `
            },
            {
                name: "image-combiner",
                website: "http://dromara.gitee.io/image-combiner",
                description: projectLocale.IMAGE_COMBINER_DESC,
                sponsor: "alexzchen",
                date: "2021.03",
                link: `
  <a href="https://gitee.com/dromara/image-combiner"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/image-combiner/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/image-combiner/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/image-combiner/badge/fork.svg"></a>
  `
            },
            {
                name: "WeMQ",
                website: "https://wemq.nicholasld.cn/",
                description: projectLocale.WEMQ_DESC,
                sponsor: "NicholasLD（nicholasld）",
                date: "2023.09",
                link: `
  <a href="https://gitee.com/dromara/WeMQ"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/WeMQ/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/WeMQ/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/WeMQ/badge/fork.svg"></a>
  <a href="https://github.com/dromara/WeMQ"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/WeMQ?style=flat-square&amp;logo=github"></a>
  <a href="https://github.com/dromara/WeMQ/network/members"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/WeMQ?style=flat-square&amp;logo=GitHub"></a>
  <a href="https://github.com/dromara/WeMQ/blob/master/LICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/WeMQ.svg?style=flat-square"></a>
          `
            },
            {
                name: "X-File-Storage",
                website: "https://x-file-storage.dromara.org/",
                description: projectLocale.X_FILE_STORAGE_DESC,
                sponsor: "梦想i（XYW1171736840）",
                date: "2023.09",
                link: `
    <a target="_blank" href="https://central.sonatype.com/search?q=org.dromara.x-file-storage"><img onerror="this.style.display='none'" src="https://img.shields.io/maven-central/v/org.dromara.x-file-storage/x-file-storage-core.svg?label=Maven%20Central" /></a>
    <a target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/license-Apache%202-green.svg"></a>
    <a target="_blank" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-8+-blue.svg"></a>
    <a target="_blank" href="https://github.com/dromara/x-file-storage"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/x-file-storage.svg?style=social" alt="github star"></a>
    <a href="https://gitee.com/dromara/x-file-storage"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/x-file-storage/badge/star.svg?theme=dark" alt="star"></a>
    <a href="https://jq.qq.com/?_wv=1027&amp;k=eGfeNqka"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/QQ%E7%BE%A4-515706495-orange" alt=""></a>
`
            },
            {
                name: "electron-egg",
                website: "https://www.yuque.com/u34495/mivcfg",
                description: projectLocale.ELECTRON_EGG_DESC,
                sponsor: "哆啦好梦（wallace530）",
                date: "2022.12",
                link: `
  <a href="https://gitee.com/dromara/electron-egg"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/electron-egg/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/electron-egg/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/electron-egg/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Felectron-egg"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/electron-egg?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Felectron-egg%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/electron-egg?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Felectron-egg%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/electron-egg.svg?style=flat-square"></a>
          `
            },
            {
                name: "easy_trans",
                website: "http://easy-trans.fhs-opensource.top/",
                description: projectLocale.EASY_TRANS_DESC,
                sponsor: "fhs_opensource",
                date: "2023.01",
                link: `
  <a href="https://gitee.com/dromara/easy_trans"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/easy_trans/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/easy_trans/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/easy_trans/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Feasy-es"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/easy-es?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Feasy-es%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/easy-es?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Feasy-es%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/easy-es.svg?style=flat-square"></a>
  `
            },
            {
                name: "fast-request",
                website: "https://dromara.org/fast-request",
                description: projectLocale.FAST_REQUEST_DESC,
                sponsor: "kings",
                date: "2021.12",
                link: `<a href="https%3A%2F%2Fjoin.slack.com%2Ft%2Frestfulfastrequest%2Fshared_invite%2Fzt-1we57vum8-TALhTHI2uNmPF2bx1NDyWw"><img onerror="this.style.display='none'" src="https://img.shields.io/static/v1?label=Slack&amp;message=Restful-Fast-Request&amp;logo=slack&amp;color=38B580" alt="Slack"></a>
  <a href="https%3A%2F%2Ftwitter.com%2FFastRequest666"><img onerror="this.style.display='none'" src="https://img.shields.io/static/v1?label=Twitter&amp;message=FastRequest666&amp;logo=twitter&amp;color=FC8D34" alt="twitter"></a>
  <a href="https%3A%2F%2Fplugins.jetbrains.com%2Fplugin%2F16988"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/plugin-Restful_Fast_Request-x.svg?logo=IntelliJ%20IDEA" alt="Jetbrains Plugins"></a>
  <img onerror="this.style.display='none'" src="https://img.shields.io/jetbrains/plugin/v/16988?logo=IntelliJ%20IDEA" alt="Version">
  <img onerror="this.style.display='none'" src="https://img.shields.io/jetbrains/plugin/d/16988?color=FE2857" alt="Downloads">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/fast-request?color=087CFA" alt="GitHub">
  <a href="https%3A%2F%2Ffastrequest.slack.com"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/Slack-%23Fast--Request-DD1265?logo=Slack" alt="Slack"></a>
  <a href="https%3A%2F%2Fwww.oscs1024.com%2Fproject%2Fdromara%2Ffast-request%3Fref%3Dbadge_small"><img onerror="this.style.display='none'" src="https://www.oscs1024.com/platform/badge/dromara/fast-request.svg?size=small" alt="OSCS Status"></a>`
            },
            {
                name: "redisfront",
                website: "https://www.redisfront.com/",
                description: projectLocale.REDISFRONT_DESC,
                sponsor: "westboy",
                date: "2022.12",
                link: `<img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-17-blue.svg" alt="JDK">
  <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Apache-2.0-4green.svg" alt="Apache 2.0">
  <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Release-1.0.7-green.svg" alt="Release">`
            },
            {
                name: "x-easypdf",
                website: "http://www.x-easypdf.cn/",
                description: projectLocale.X_EASYPDF_DESC,
                sponsor: "xsx（xsxgit）",
                date: "2022.07",
                link: `
  <a href="https://gitee.com/dromara/x-easypdf"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/x-easypdf/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/x-easypdf/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/x-easypdf/badge/fork.svg"></a>
          `
            },
            {
                name: "gobrs-async",
                website: "https://async.sizegang.cn/",
                description: projectLocale.GOBRS_ASYNC_DESC,
                sponsor: "Memorydoc",
                date: "2022.06",
                link: `
  <a href="https://gitee.com/dromara/gobrs-async"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/gobrs-async/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/gobrs-async/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/gobrs-async/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgobrs-async"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/gobrs-async?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgobrs-async%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/gobrs-async?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fgobrs-async%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/gobrs-async.svg?style=flat-square"></a>
          `
            },
            {
                name: "Binlog4j",
                website: "https://gitee.com/dromara/binlog4j",
                description: projectLocale.BINLOG4J_DESC,
                sponsor: "就眠儀式（Jmysy）",
                date: "2023.08",
                link: `
      <a href="http%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0.html" target="_blank">
          <img onerror="this.style.display='none'" src="http://img.shields.io/:license-apache-brightgreen.svg">
      </a>
      <a href="https%3A%2F%2Fcentral.sonatyper.com%2Fsearch%3Fq%3Dbinlog4j%26smo%3Dtrue" target="_blank">
          <img onerror="this.style.display='none'" src="https://img.shields.io/maven-central/v/com.gitee.Jmysy/binlog4j">
      </a>
      <a>
          <img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-1.8+-green.svg">
      </a>
      <a>
          <img onerror="this.style.display='none'" src="https://img.shields.io/badge/springBoot-2.0+-green.svg">
      </a>
      <a>
          <img onerror="this.style.display='none'" src="https://img.shields.io/badge/springBoot-3.0+-green.svg">
      </a>
  `
            },
            {
                name: "sms4j",
                website: "https://wind.kim/",
                description: projectLocale.SMS4J_DESC,
                sponsor: "风如歌（MR-wind）",
                date: "2023.04",
                link: `
  <a href="https://gitee.com/dromara/sms4j/stargazers"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/sms4j/badge/star.svg?theme=gvp"></a>
  <a href="https://gitee.com/dromara/sms4j/blob/master/LICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/license-Apache--2.0-green"></a>
  <a href="https://gitee.com/dromara/sms4j"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/version-v2.2.0-blue"></a>
  `
            },
            {
                name: "stream-query",
                website: "http://stream-query.dromara.org/",
                description: projectLocale.STREAM_QUERY_DESC,
                sponsor: "阿超（VampireAchao）",
                date: "2023.03",
                link: `
      <a target="_blank" href="https%3A%2F%2Fsearch.maven.org%2Fartifact%2Forg.dromara.stream-query%2Fstream-query">
          <img onerror="this.style.display='none'" src="https://img.shields.io/maven-central/v/org.dromara.stream-query/stream-query.svg?label=Maven%20Central">
      </a>
      <a target="_blank" href="https%3A%2F%2Fwww.apache.org%2Flicenses%2FLICENSE-2.0.html">
          <img onerror="this.style.display='none'" src="https://img.shields.io/badge/license-Apache%202-4EB1BA.svg">
      </a>
      <a target="_blank" href="https://gitee.com/dromara/stream-query">
          <img onerror="this.style.display='none'" src="https://gitee.com/dromara/stream-query/badge/star.svg" alt="star">
      </a>
      <a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2Fstream-query">
          <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/stream-query.svg?style=social" alt="github star">
      </a>
  `
            },
            {
                name: "payment-spring-boot",
                website: "https://felord.gitee.io/payment-spring-boot",
                description: projectLocale.PAYMENT_SPRING_BOOT_DESC,
                sponsor: "felord",
                date: "2023.03",
                link: `
<a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2Fpayment-spring-boot%2Fblob%2Frelease%2FLICENSE">
  <img onerror="this.style.display='none'" alt="" src="https://img.shields.io/github/license/dromara/payment-spring-boot">
</a>
<a target="_blank" href="https%3A%2F%2Ffelord.cn">
  <img onerror="this.style.display='none'" alt="" src="https://img.shields.io/badge/java-8-red">
</a>
<a target="_blank" href="https%3A%2F%2Fspring.io">
  <img onerror="this.style.display='none'" alt="" src="https://img.shields.io/badge/spring%20boot-2.4%2B-brightgreen">
</a>
<a target="_blank" href="https%3A%2F%2Fmvnrepository.com%2Fartifact%2Fcn.felord%2Fpayment-spring-boot">
  <img onerror="this.style.display='none'" alt="" src="https://img.shields.io/maven-central/v/cn.felord/payment-spring-boot.svg?style=flat-square">
</a>
<a target="_blank" href="https%3A%2F%2Fgithub.com%2Fdromara%2Fpayment-spring-boot">
  <img onerror="this.style.display='none'" alt="" src="https://img.shields.io/github/stars/dromara/payment-spring-boot?style=social">
</a>
<a target="_blank" href="https%3A%2F%2Fwork.weixin.qq.com%2Fkfid%2Fkfc9d9d759f27f087e1">
  <img onerror="this.style.display='none'" alt="点击立即微信咨询" src="https://img.shields.io/badge/%E7%82%B9%E5%87%BB-%E5%BE%AE%E4%BF%A1%E5%92%A8%E8%AF%A2-brightgreen">
</a>
  <a target="_blank" href="https%3A%2F%2Fjq.qq.com%2F%3F_wv%3D1027%26k%3DcCiv8Vlv">
  <img onerror="this.style.display='none'" alt="点击加入QQ交流②群" src="https://img.shields.io/badge/QQ%E4%BA%A4%E6%B5%81%E7%BE%A4-549174561-ff69b4">
</a>
  `
            },
            {
                name: "Neutrino-Proxy",
                website: "https://gitee.com/dromara/neutrino-proxy",
                description: projectLocale.NEUTRINO_PROXY_DESC,
                sponsor: "傲世孤尘（asgc）",
                date: "2023.01",
                link: `
  <a href="https://gitee.com/dromara/neutrino-proxy/stargazers"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/neutrino-proxy/badge/star.svg?theme=dark" alt="star"></a>
  <a href="https://gitee.com/dromara/neutrino-proxy/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/neutrino-proxy/badge/fork.svg?theme=dark" alt="fork"></a>
  <a target="_blank" href="https%3A%2F%2Fwww.oracle.com%2Fjava%2Ftechnologies%2Fjavase%2Fjavase-jdk8-downloads.html">
      <img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-8+-red.svg">
  </a>
  <a href="/dromara/neutrino-proxy/blob/master/LICENSE">
      <img onerror="this.style.display='none'" src="https://img.shields.io/badge/license-MIT-red" alt="license MIT">
  </a>
  `
            },
            {
                name: "yft-design",
                website: "https://www.yft.design/",
                description: projectLocale.YFT_DESIGN_DESC,
                sponsor: "Nevermore（morestrive）",
                date: "2023.08",
                link: `
  <a href="https://gitee.com/dromara/yft-design"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/yft-design/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/yft-design/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/yft-design/badge/fork.svg"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fyft-design"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/yft-design?style=flat-square&amp;logo=github"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fyft-design%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/yft-design?style=flat-square&amp;logo=GitHub"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fyft-design%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/yft-design.svg?style=flat-square"></a>
  `
            },
            {
                name: "zyplayer-doc",
                website: "http://doc.zyplayer.com/",
                description: projectLocale.ZYPLAYER_DOC_DESC,
                sponsor: "暮光：城中城（zyplayer）",
                date: "2023.02",
                link: `
  <a href="https://gitee.com/dromara/zyplayer-doc"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/zyplayer-doc/badge/star.svg"></a>
  <a href="https://gitee.com/dromara/zyplayer-doc/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/zyplayer-doc/badge/fork.svg"></a>
          `
            },
            {
                name: "orion-visor",
                website: "https://gitee.com/dromara/orion-visor",
                description: projectLocale.ORION_VISOR,
                sponsor: "李佳航（lijiahangmax）",
                date: "2024.03",
                link: `<a
       href="https://app.codacy.com/gh/lijiahangmax/orion-visor/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade">
    <img onerror="this.style.display='none'" src="https://app.codacy.com/project/badge/Grade/49eaab3a9a474af3b87e1d21ffec71c4" alt="quality" />
    </a>
    <a
       href="https://www.apache.org/licenses/LICENSE-2.0">
      <img onerror="this.style.display='none'" src="https://img.shields.io/github/license/lijiahangmax/orion-visor" alt="License" />
    </a>
    <a
       href="https://github.com/dromara/orion-visor/releases">
      <img onerror="this.style.display='none'" src="https://img.shields.io/github/v/release/lijiahangmax/orion-visor" alt="release" />
    </a>
    <a
       href="https://gitee.com/dromara/orion-visor/stargazers">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/orion-visor/badge/star.svg?theme=gvp" alt="star" />
    </a>
    <a 
       href="https://gitee.com/dromara/orion-visor/members">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/orion-visor/badge/fork.svg?theme=gvp" alt="fork" />
    </a>
    <a 
       href="https://github.com/dromara/orion-visor">
      <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/lijiahangmax/orion-visor" alt="star" />
    </a>
    <a 
       href="https://github.com/dromara/orion-visor">
      <img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/lijiahangmax/orion-visor" alt="star" />
    </a>`
            },
            {
                name: "DyJava",
                website: "https://gitee.com/dromara/dy-java",
                description: projectLocale.DYJAVA,
                sponsor: "danmo（sxwdmjy）",
                date: "2024.04",
                link: `<a href="https://gitee.com/dromara/dy-java">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/dy-java/badge/star.svg" alt="Gitee Stars">
  </a>`
            },
            {
                name: "warm-flow",
                website: "http://warm-flow.cn",
                description: projectLocale.WARM_FLOW,
                sponsor: "晓华（min290）",
                date: "2023.12",
                link: `<a href="https://gitee.com/dromara/warm-flow">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/warm-flow/badge/star.svg" alt="Gitee Stars">
  </a>`
            },
            {
                name: "dbswitch",
                website: "https://gitee.com/dromara/dbswitch",
                description: projectLocale.DBSWITCH,
                sponsor: "inrgihc（inrgihc）",
                date: "2020.12",
                link: `<a href="https://gitee.com/dromara/dbswitch">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/dbswitch/badge/star.svg" alt="Gitee Stars">
  </a>`
            },
            {
                name: "skyeye-oa",
                website: "https://gitee.com/dromara/skyeye",
                description: projectLocale.SKYEYE_OA,
                sponsor: "智能制造云办公（doc_wei01_admin）",
                date: "2022.08",
                link: `<a href="https://gitee.com/dromara/skyeye">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/skyeye/badge/star.svg" alt="Gitee Stars">
  </a>`
            },
            {
                name: "easyAi",
                website: "https://gitee.com/dromara/easyAi",
                description: projectLocale.EASYAI,
                sponsor: "唯一解（ldp_dpsmax）",
                date: "2024.05",
                link: `<a href="https://gitee.com/dromara/easyAi">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/easyAi/badge/star.svg" alt="Gitee Stars">
  </a>`
            },
            {
                name: "mybatis-plus-ext",
                website: "https://gitee.com/dromara/mybatis-plus-ext",
                description: projectLocale.MYBATIS_PLUS_EXT,
                sponsor: "唐振超（tangzc）",
                date: "2021.08",
                link: `<a href="https://gitee.com/dromara/mybatis-plus-ext">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/mybatis-plus-ext/badge/star.svg" alt="Gitee Stars">
      </a>`
            },
            {
                name: "easy-query",
                website: "https://gitee.com/dromara/easy-query",
                description: projectLocale.EASY_QUERY,
                sponsor: "薛家明（xuejm）",
                date: "2023.07",
                link: `<a href="https://gitee.com/dromara/easy-query">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/easy-query/badge/star.svg" alt="Gitee Stars">
      </a>
      <a target="_blank" href="https://central.sonatype.com/search?q=easy-query">
        <img onerror="this.style.display='none'" src="https://img.shields.io/maven-central/v/com.easy-query/easy-query-all?label=Maven%20Central" alt="Maven" />
    </a>
    <a target="_blank" href="https://www.apache.org/licenses/LICENSE-2.0.txt"><img onerror="this.style.display='none'" src="https://img.shields.io/:license-Apache2-blue.svg" alt="Apache 2" /></a>
    <a target="_blank" href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-8-green.svg" alt="jdk-8" /></a>
    <a target="_blank" href="https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-11-green.svg" alt="jdk-11" /></a>
    <a target="_blank" href="https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-17-green.svg" alt="jdk-17" /></a>`
            },
            {
                name: "tianai-captcha",
                website: "https://gitee.com/dromara/tianai-captcha",
                description: projectLocale.TIANAI_CAPTCHA,
                sponsor: "天爱有情（tianai）",
                date: "2022.01",
                link: `<a href="https://gitee.com/dromara/tianai-captcha">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/tianai-captcha/badge/star.svg" alt="Gitee Stars">
      </a>
      `
            },
            {
                name: "dax-pay",
                website: "https://gitee.com/dromara/dax-pay",
                description: projectLocale.DAX_PAY,
                sponsor: "喵呀（GIotEE）",
                date: "2023.07",
                link: `
       <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/dax-pay?style=flat&label=Github">
 <img onerror="this.style.display='none'" src='https://gitee.com/bootx/dax-pay/badge/star.svg?theme=dark' alt='star'/>
 <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Dax%20Pay-2.0.8-success.svg" alt="Build Status"/>
 <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Author-Daxpay-orange.svg" alt="Build Status"/>
 <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Spring%20Boot-2.7.18-blue.svg" alt="Downloads"/>
 <img onerror="this.style.display='none'" src="https://img.shields.io/badge/license-Apache%20License%202.0-green.svg"/>
      `
            },
            {
                name: "mayfly-go",
                website: "https://gitee.com/dromara/mayfly-go",
                description: projectLocale.MYFLY_GO,
                sponsor: "Coder慌（objs）",
                date: "2022.05",
                link: `<a href="https://gitee.com/dromara/mayfly-go" target="_blank">
    <img onerror="this.style.display='none'" src="https://gitee.com/dromara/mayfly-go/badge/star.svg?theme=white" alt="star"/>
    <img onerror="this.style.display='none'" src="https://gitee.com/dromara/mayfly-go/badge/fork.svg" alt="fork"/>
  </a>
  <a href="https://github.com/dromara/mayfly-go" target="_blank">
    <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/mayfly-go.svg?style=social" alt="github star"/>
    <img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/mayfly-go.svg?style=social" alt="github fork"/>
  </a>
  <a href="https://hub.docker.com/r/mayflygo/mayfly-go/tags" target="_blank">
    <img onerror="this.style.display='none'" src="https://img.shields.io/docker/pulls/mayflygo/mayfly-go.svg?label=docker%20pulls&color=fac858" alt="docker pulls"/>
  </a>
  <a href="https://github.com/golang/go" target="_blank">
    <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Golang-1.22%2B-yellow.svg" alt="golang"/>
  </a>
  <a href="https://cn.vuejs.org" target="_blank">
    <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Vue-3.x-green.svg" alt="vue">
  </a>
      `
            },
            {
                name: "MilvusPlus",
                website: "https://milvus.cn/",
                description: projectLocale.MILVUSPLUS,
                sponsor: "xgc（giteeClass）",
                date: "2024.05",
                link: `<a href="https://gitee.com/dromara/MilvusPlus">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/MilvusPlus/badge/star.svg" alt="Gitee Stars">
      </a>
      `
            },
            {
                name: "newcar",
                website: "https://gitee.com/dromara/newcar",
                description: projectLocale.NEWCAR,
                sponsor: "Acbox（drwave）",
                date: "2023.02",
                link: `  <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/newcar?color=yellowgreen&logo=github&style=flat-square" />
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/newcar?logo=github&style=flat-square" />
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/license/Bug-Duck/newcar?color=skyblue&logo=github&style=flat-square" />
  <a href="https://twitter.com/bugduckteam"><img onerror="this.style.display='none'" src="https://shields.io/badge/twitter-BugDuck_Team-blue?logo=twitter&style=flat-square" /></a>
  <a href="https://discord.gg/ANqgRc3C4b"><img onerror="this.style.display='none'" src="https://shields.io/badge/discord-newcarjs-blue?logo=discord&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/newcar"><img onerror="this.style.display='none'" src="https://img.shields.io/npm/dw/newcar.svg"/></a>
  <a href="https://www.npmjs.com/package/newcar"><img onerror="this.style.display='none'" src="https://img.shields.io/npm/v/newcar.svg"/></a>
      `
            },
            {
                name: "ujcms",
                website: "https://gitee.com/dromara/ujcms",
                description: projectLocale.UJCMS,
                sponsor: "ujcms（ujcms）",
                date: "2024.04",
                link: `<a href="https://gitee.com/dromara/ujcms">
      <img onerror="this.style.display='none'" src="https://gitee.com/dromara/ujcms/badge/star.svg" alt="Gitee Stars">
      </a>
      `
            },
            {
                name: "carbon",
                website: "https://gitee.com/dromara/carbon",
                description: projectLocale.CARBON_DESC,
                sponsor: "勾国印（gouguoyin）",
                date: "2024.10",
                link: `

<a href='https://gitee.com/dromara/carbon/stargazers'><img onerror="this.style.display='none'" src='https://gitee.com/dromara/carbon/badge/star.svg?theme=gvp' alt='star'></img></a>
  <a href="https://github.com/dromara/carbon"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/carbon.svg?style=social&amp;label=Stars" alt="GitHub"></a>
<a target="_blank" href="https://github.com/dromara/carbon/releases">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/release/dromara/carbon.svg">
</a>
<a target="_blank" href="https://github.com/dromara/carbon/blob/master/LICENSE">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/carbon">
</a>`
            }
        ]
    },
    {
        name: projectLocale.OPERATIONS_AND_MAINTENANCE_CONTROL,
        projects: [
            {
                name: "TestHub",
                website: "http://nsrule.com/",
                description: projectLocale.TESTHUB_DESC,
                sponsor: "失败女神（failedgoddes）",
                date: "2023.08",
                link: `
  <a href="https://gitee.com/failedgoddess/test-hub/stargazers"><img onerror="this.style.display='none'" src="https://gitee.com/failedgoddess/test-hub/badge/star.svg?theme=gvp"></a>
  <a href="https://gitee.com/failedgoddess/test-hub/blob/master/LICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/license-Apache--2.0-green"></a>
  <a href="https://gitee.com/failedgoddess/test-hub"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/version-v1.0.0-blue"></a>
  `
            },
            {
                name: "domain-admin",
                website: "https://domain-admin.cn/",
                description: projectLocale.DOMAIN_ADMIN_DESC,
                sponsor: "mouday",
                date: "2024.08",
                link: `
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/domain-admin.svg?logo=GitHub" alt="">
  `
            }
        ]
    },
    {
        name: projectLocale.BIG_DATA,
        projects: [
            {
                name: "CloudEon",
                website: "http://www.cloudeon.top/",
                description: projectLocale.CLOUDEON_DESC,
                sponsor: "Pandas886",
                date: "2023.04",
                link: `<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FCloudEon"><img onerror="this.style.display='none'" src="https://views.whatilearened.today/views/github/dromara/CloudEon.svg" alt="HitCount"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FCloudEon%2Fcommits%2Fmain"><img onerror="this.style.display='none'" src="https://img.shields.io/github/commit-activity/m/dromara/CloudEon?color=ffff00" alt="Commits"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fpre-commit%2Fpre-commit"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit" alt="pre-commit"></a>
  <a href="#contributors-"><img onerror="this.style.display='none'" src="https://img.shields.io/github/all-contributors/dromara/CloudEon" alt="All Contributors"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FCloudEon%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/CloudEon" alt="GitHub license"></a>`
            },
            {
                name: "data-compare",
                website:
                    "https://blog.csdn.net/weixin_43291055/article/details/128393823?spm=1001.2014.3001.5502",
                description: projectLocale.DATA_COMPARE_DESC,
                sponsor: "诸葛子房（ZhuGeZiFang）",
                date: "2023.03",
                link: `
  <img onerror="this.style.display='none'" src="https://gitee.com/ZhuGeZiFang/data-compare/badge/star.svg" alt="">
  <img onerror="this.style.display='none'" src="https://gitee.com/ZhuGeZiFang/data-compare/badge/fork.svg?theme=gvp" alt="">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/zhugezifang/dataCompare.svg?logo=GitHub" alt="">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/zhugezifang/dataCompare.svg?logo=GitHub" alt="">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/watchers/zhugezifang/dataCompare.svg?logo=GitHub" alt="">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/license/zhugezifang/dataCompare.svg" alt="">
  <img onerror="this.style.display='none'" src="https://img.shields.io/github/v/release/zhugezifang/dataCompare?label=latest&amp;style=flat-square" alt="">`
            }
        ]
    },
    {
        name: projectLocale.MICROSERVICE,
        projects: [
            {
                name: "lamp-cloud",
                website: "https://tangyh.top/",
                description: projectLocale.LAMP_CLOUD_DESC,
                sponsor: "最后（zuihou111）",
                date: "2022.11",
                link: `
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/%E8%AF%AD%E8%A8%80-Java%20%7C%20SpringCloud%20%7C%20Vue3%20%7C%20...-red?style=flat-square&amp;color=42b883" alt="Language"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/lamp-cloud?color=42b883&amp;style=flat-square" alt="License"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fzuihou"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/%E4%BD%9C%E8%80%85-zuihou-orange.svg" alt="Author"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/%E7%89%88%E6%9C%AC-3.10.0-brightgreen.svg" alt="Version"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud%2Fstargazers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/lamp-cloud?color=42b883&amp;logo=github&amp;style=flat-square" alt="Star"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Flamp-cloud%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/lamp-cloud?color=42b883&amp;logo=github&amp;style=flat-square" alt="Fork"></a>
  <a href="https://gitee.com/dromara/lamp-cloud/stargazers"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/lamp-cloud/badge/star.svg?theme=gray" alt="Star"></a>
  <a href="https://gitee.com/dromara/lamp-cloud/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/lamp-cloud/badge/fork.svg?theme=gray" alt="Fork"></a>
  `
            },
            {
                name: "dante-cloud",
                website: "https://www.herodotus.cn/",
                description: projectLocale.DANTE_CLOUD_DESC,
                sponsor: "码匠君（herodotus）",
                date: "2022.08",
                link: `
      <a href="#" target="_blank"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/Version-3.1.3.5-red.svg?logo=spring" alt="Version 3.1.3.5"></a>
      <a href="https://gitee.com/herodotus/dante-engine" target="_blank"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/Dante%20Engine-3.1.3.5-red.svg?logo=spring" alt="Dante Engine 3.1.3.5"></a>
      <a href="https://gitee.com/herodotus/dante-oss" target="_blank"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/Dante%20OSS-3.1.3.5-red.svg?logo=spring" alt="Dante OSS 3.1.3.5"></a>
      <a href="https%3A%2F%2Fbell-sw.com%2Fpages%2Fdownloads%2F%23downloads" target="_blank"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-17%2B-green.svg?logo=openjdk" alt="Java 17"></a>
      <a href="/dromara/dante-cloud/blob/master/LICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/License-Apache--2.0-blue.svg?logo=apache" alt="License Apache 2.0"></a>
      <a href="https%3A%2F%2Fblog.csdn.net%2FPointer_v" target="_blank"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/Author-%E7%A0%81%E5%8C%A0%E5%90%9B-orange" alt="码匠君"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/herodotus-cloud/dante-cloud?style=flat&amp;logo=github" alt="Github star"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/herodotus-cloud/dante-cloud?style=flat&amp;logo=github" alt="Github fork"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/dante-cloud/badge/star.svg?theme=dark" alt="Gitee star"></a>
      <a href="https://gitee.com/dromara/dante-cloud"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/dante-cloud/badge/fork.svg?theme=dark" alt="Gitee fork"></a>
  `
            },
            {
                name: "open-capacity-platform",
                website: "https://gitee.com/dromara/open-capacity-platform/",
                description: projectLocale.OPEN_CAPACITY_PLATFORM_DESC,
                sponsor: "owen（jeecp）",
                date: "2023.01",
                link: `
   <img onerror="this.style.display='none'" src="https://img.shields.io/badge/buildi%20-success-green.svg" alt="Build Status">
   <img onerror="this.style.display='none'" src="https://img.shields.io/badge/easyweb%20-green.svg" alt="es">
   <img onerror="this.style.display='none'" src="https://img.shields.io/badge/elasticsearch%20-6.5.4-green.svg" alt="es">
   <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Spring%20Boot-2.6.3-blue.svg" alt="sb">
   <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Spring%20Cloud-2021.0.5-blue.svg" alt="sc">
   <img onerror="this.style.display='none'" src="https://img.shields.io/badge/Spring%20Cloud%20Alibaba-2021.0.4.0-blue.svg" alt="sc">
   <a href="https://gitee.com/owenwangwen/open-capacity-platform/stargazers"><img onerror="this.style.display='none'" src="https://gitee.com/owenwangwen/open-capacity-platform/badge/star.svg?theme=white" alt="star"></a>
  <a href="https://gitee.com/owenwangwen/open-capacity-platform"><img onerror="this.style.display='none'" src="https://gitee.com/owenwangwen/open-capacity-platform/widgets/widget_6.svg" alt="Fork me on Gitee"></a>
  <a href="https://gitee.com/owenwangwen/open-capacity-platform/members"><img onerror="this.style.display='none'" src="https://gitee.com/owenwangwen/open-capacity-platform/badge/fork.svg?theme=white" alt="fork"></a>
  `
            },
            {
                name: "RuoYi-Vue-Plus",
                website: "https://plus-doc.dromara.org/",
                description: projectLocale.RUOYI_VUE_PLUS_DESC,
                sponsor: "疯狂的狮子Li（JavaLionLi）",
                date: "2023.04",
                link: `
  <a href="https://gitee.com/dromara/RuoYi-Vue-Plus"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/RuoYi-Vue-Plus/badge/star.svg?theme=blue" alt="码云Gitee"></a>
  <a href="https%3A%2F%2Fgithub.com%2Fdromara%2FRuoYi-Vue-Plus"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/JavaLionLi/RuoYi-Vue-Plus.svg?style=social&amp;label=Stars" alt="GitHub"></a>
  <a href="https://gitee.com/dromara/RuoYi-Vue-Plus/blob/master/LICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
  <a href="https%3A%2F%2Fwww.jetbrains.com%2F%3Ffrom%3DRuoYi-Vue-Plus"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/IntelliJ%20IDEA-%E6%8F%90%E4%BE%9B%E6%94%AF%E6%8C%81-blue.svg" alt="使用IntelliJ IDEA开发维护"></a>
  <br>
  <a href="https://gitee.com/dromara/RuoYi-Vue-Plus"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/RuoYi_Vue_Plus-4.8.0-success.svg" alt="RuoYi-Vue-Plus"></a>
  <a href=""><img onerror="this.style.display='none'" src="https://img.shields.io/badge/Spring%20Boot-2.7-blue.svg" alt="Spring Boot"></a>
  <a href=""><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-8-green.svg" alt="JDK-8+"></a>
  <a href=""><img onerror="this.style.display='none'" src="https://img.shields.io/badge/JDK-11-green.svg" alt="JDK-11"></a>`
            },
            {
                name: "J2EEFAST",
                website: "http://www.j2eefast.com/",
                description: projectLocale.J2EEFAST_DESC,
                sponsor: "周周（zhouhuanOGP）",
                date: "2023.03",
                link: `
  <img onerror="this.style.display='none'" src="https://img.shields.io/badge/%E9%AB%98%E6%95%88-%E5%BF%AB%E9%80%9F-brightgreen">
  <img onerror="this.style.display='none'" src="https://img.shields.io/badge/%E5%AE%89%E5%85%A8-%E6%BA%90%E7%A0%81%E5%8F%AF%E6%8E%A7-blueviolet">
  <a href="https%3A%2F%2Fjq.qq.com%2F%3F_wv%3D1027%26k%3D5xTlnN6" target="_blank"><img onerror="this.style.display='none'" src="https://img.shields.io/badge/QQ%E6%8A%80%E6%9C%AF%E7%BE%A4-805468934-orange"></a>
  `
            }
        ]
    },
    {
        name: projectLocale.DISTRIBUTED_SCHEDULING,
        projects: [
            {
                name: "hodor",
                website: "https://dromara.org/zh/projects/hodor/overview",
                description: projectLocale.HODOR_DESC,
                sponsor: "tincopper（tomgs）",
                date: "2023.04",
                link: `
        <a href="https://gitee.com/dromara/hodor"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/hodor/badge/star.svg"></a>
<a href="https://gitee.com/dromara/hodor/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/hodor/badge/fork.svg"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fhodor"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/hodor?style=flat-square&amp;logo=github"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fhodor%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/hodor?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fhodor%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/hodor.svg?style=flat-square"></a>
        `
            },
            {
                name: "Disjob",
                website: "http://ponfee.cn:8000/login",
                description: projectLocale.DISJOB_DESC,
                sponsor: "ponfee（fupengfei）",
                date: "2023.08",
                link: `
        <a href="https%3A%2F%2Fgithub.com%2Fdromara%2Fdisjob%2Factions"><img onerror="this.style.display='none'" src="https://github.com/dromara/disjob/workflows/build/badge.svg" alt="Build status"></a>
        <a href="https://gitee.com/dromara/Disjob"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/Disjob/badge/star.svg"></a>
<a href="https://gitee.com/dromara/Disjob/members"><img onerror="this.style.display='none'" src="https://gitee.com/dromara/Disjob/badge/fork.svg"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FDisjob"><img onerror="this.style.display='none'" src="https://img.shields.io/github/stars/dromara/Disjob?style=flat-square&amp;logo=github"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FDisjob%2Fnetwork%2Fmembers"><img onerror="this.style.display='none'" src="https://img.shields.io/github/forks/dromara/Disjob?style=flat-square&amp;logo=GitHub"></a>
<a href="https%3A%2F%2Fgithub.com%2Fdromara%2FDisjob%2Fblob%2Fmaster%2FLICENSE"><img onerror="this.style.display='none'" src="https://img.shields.io/github/license/dromara/Disjob.svg?style=flat-square"></a>
`
            }
        ]
    }
]