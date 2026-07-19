const routes = {
  truth: {
    number: "01",
    title: "认识真实",
    subtitle: "看见塑造我们的结构",
    question: "哪些东西看似是我的选择，其实早已被家庭、制度、欲望与时代写进身体？",
    color: "#507f7b"
  },
  love: {
    number: "02",
    title: "学习爱",
    subtitle: "练习连接、边界与照护",
    question: "爱不是牺牲自己，也不是占有他人；我们如何学习一种有边界的连接？",
    color: "#667e54"
  },
  energy: {
    number: "03",
    title: "增强能量",
    subtitle: "把理解变成生活的力量",
    question: "理解之后，怎样获得行动、独立、休息和参与公共生活的能量？",
    color: "#4b5b70"
  }
};

const regions = {
  self: { number: "I", title: "自我之原", en: "The Ground of Self", question: "关于“我是谁”，以及一个人如何从既定脚本里长出自己。", note: "从家庭脚本、内在声音、女性身份、边界、独处与自由出发，重新成为自己的作者。", color: "#668f82" },
  body: { number: "II", title: "身体之境", en: "The Embodied Land", question: "关于重新理解自己的身体，不再只把身体看作被评价、被规训、被使用的对象。", note: "把身体作为经验、记忆与自主权的起点，重新理解欲望、生育、衰老和公共空间。", color: "#7c9188" },
  relationships: { number: "III", title: "关系群岛", en: "The Isles of Relation", question: "关于人与人的靠近、依赖、分离，也关于在关系中保留自己。", note: "亲密、家庭、友情、照护与社会网络像彼此相望的岛屿：能够连接，也需要各自完整。", color: "#748b72" },
  career: { number: "IV", title: "职业山脉", en: "The Mountains of Work", question: "关于工作、野心、能力、倦怠，以及女性如何在组织里获得位置。", note: "这里既讨论攀登，也讨论判断、谈判、协作、转行和留下可以长期积累的作品。", color: "#5b6b7c" },
  power: { number: "V", title: "金钱与权力之城", en: "The City of Power", question: "关于资源、阶层、制度、消费和公共生活，这里是从“个人努力”之外，看见结构的位置。", note: "金钱、劳动、阶层、治理与公共正义共同构成自由的现实条件。", color: "#315c50" },
  wilderness: { number: "VI", title: "荒野与岔路", en: "The Wilds & Crossroads", question: "关于那些“不知道该怎么办”的人生阶段，也关于离开标准路径后的生活想象。", note: "毕业、三十岁、离职、非标准人生、迁移和荒野，都可能成为重新选择的入口。", color: "#637084" },
  time: { number: "VII", title: "时间之海", en: "The Sea of Time", question: "关于一生的长度：衰老、死亡、记忆、代际，以及如何把生活放进更长的时间里看。", note: "时间并不只意味着失去；它也保存记忆、写作、传承、晚年创造与新的自由。", color: "#6f9993" }
};

const topicCatalog = {
  self: [
    { title: "原生家庭与自我脚本", route: "truth", books: ["把自己作为方法", "成为我自己", "自我突围", "我走不出我的黑夜", "微小的总和", "斯通纳", "我很好啊，妈"] },
    { title: "自我认知与内在声音", route: "truth", books: ["聪明人的个人成长", "被讨厌的勇气", "沉思录", "心流", "具体生活", "人间值得", "何为良好生活", "哲学的慰藉"] },
    { title: "女性身份与自尊", route: "truth", books: ["第二性", "女性的奥秘", "从零开始的女性主义", "一间自己的房间", "写作是一把刀"] },
    { title: "教育制度与文凭规训", route: "truth", books: ["文凭社会", "精英的傲慢", "身份的焦虑"] },
    { title: "讨好、边界与课题分离", route: "love", books: ["论不服从", "逃避自由", "一个孤独漫步者的遐想", "我不相信神话", "一只特立独行的猪"] },
    { title: "独处与自我陪伴", route: "love", books: ["惶然录", "瓦尔登湖", "荒原狼", "悉达多", "阅读是一座随身携带的避难所", "一个人的朝圣"] },
    { title: "自由的起点", route: "energy", books: ["存在主义是一种人道主义", "西西弗神话", "刀锋", "月亮与六便士", "作为意志与表象的世界"] },
    { title: "独立的程度", route: "energy", books: ["世界悬而未决，但也无关紧要", "我不想知道的事", "濒临狂野的心", "无尽与有限", "把生命浪费在美好的事物上", "生活就是和喜欢的一切在一起", "我想要始终不渝地生活"] },
    { title: "自我表达与精神生活", route: "energy", books: ["我的精神家园", "沉默的大多数", "哲学家们都干了些什么", "给青年诗人的信", "北岛作品集", "我为你洒下月光", "山茶文具店", "芒果街上的小屋", "可能性的艺术"] }
  ],
  body: [
    { title: "月经、疾病与身体经验", route: "truth", books: ["我们的身体，我们自己", "女生呵护指南", "身体从未忘记"] },
    { title: "容貌焦虑与异性青睐", route: "truth", books: ["老女孩", "俗女日常", "海蒂性学报告：女人篇"] },
    { title: "性、欲望与身体自主权", route: "truth", books: ["欲望的演化：人类的择偶策略", "厌女症", "房思琪的初恋乐园"] },
    { title: "生育选择与母职想象", route: "truth", books: ["成为母亲", "82年生的金智英", "坡道上的家", "使女的故事"] },
    { title: "身体衰老与生命有限", route: "truth", books: ["论衰老", "最好的告别", "百岁人生：长寿时代的生活和工作"] },
    { title: "女性身体与公共空间", route: "truth", books: ["女性主义城市", "单身女性的时代", "看不见的女性"] },
    { title: "创伤、羞耻与身体记忆", route: "love", books: ["始于极限", "炸裂志", "生活的代价"] },
    { title: "与身体重新和解", route: "love", books: ["过一种女性主义的生活", "厌女", "父权制与资本主义", "如何抑制女性写作", "女性主义", "女性主义有什么用？"] },
    { title: "女性生命样本", route: "love", books: ["弗吉尼亚·伍尔夫传", "成为波伏瓦", "自己的房子"] }
  ],
  relationships: [
    { title: "关于狭义的爱：亲密关系", route: "love", books: ["爱的艺术", "婚姻与爱情", "亲密关系", "爱情笔记", "爱的终结", "为什么爱会伤人", "冷亲密", "爱的五种语言", "依恋", "CALL ME BY YOUR NAME"] },
    { title: "关于广义的爱：照护、同情与共同生活", route: "love", books: ["看那些灯光，亲爱的", "生活在低处", "查令十字街84号", "一个叫欧维的男人决定去死", "爱你就像爱生命", "礼物"] },
    { title: "母女关系与代际牵连", route: "love", books: ["母爱的羁绊", "如父如子", "步履不停", "回家真好", "岂不怀归"] },
    { title: "婚姻、家庭规范与性别分工", route: "truth", books: ["私人生活的变革", "家庭、私有制和国家的起源", "第二轮班", "公开的秘密", "东京贫困女子"] },
    { title: "友情、亲邻与日常支持", route: "love", books: ["及格家宣言", "猫鱼", "沙沙生长", "我的二本学生", "一个男人的位置"] },
    { title: "爱与依恋：靠近、分手与失去", route: "love", books: ["当我们谈论爱情时我们在谈论什么", "成年人的谎言生活", "生活在低处"] },
    { title: "与他者相处：沟通、边界与课题分离", route: "energy", books: ["非暴力沟通", "日常生活的自我呈现", "中国人行动的逻辑", "中国人的关系原理"] },
    { title: "人情社会与关系网络", route: "truth", books: ["被管理的心", "社会性别研究导论", "乡土中国 生育制度", "单身社会", "亲密关系的购买", "回归故里", "孤独六讲"] }
  ],
  career: [
    { title: "职业选择与职业发展", route: "energy", books: ["跳槽圣经", "远见", "能力陷阱", "每周工作4小时", "做二休五"] },
    { title: "野心、成就与自我授权", route: "energy", books: ["价值", "原则", "高效能人士的七个习惯", "精要主义", "重来123", "刻意练习"] },
    { title: "职场性别偏见与隐性门槛", route: "truth", books: ["工作的迷思", "组织社会学十讲", "文化与组织：心理软件的力量（第三版）"] },
    { title: "领导力、协作与组织文化", route: "energy", books: ["流程即组织力", "这就是OKR：让谷歌、亚马逊实现爆炸性增长的工作法", "OKR：源于英特尔和谷歌的目标管理利器", "管理的常识", "奈飞文化手册", "卓有成效的管理者", "管理的实践", "第五项修炼"] },
    { title: "表达、判断与谈判", route: "energy", books: ["如何阅读一本书", "决策与判断", "华尔街日报是如何讲故事的", "金字塔原理", "关键对话", "谈判力", "影响力"] },
    { title: "倦怠、时间贫困与工作边界", route: "truth", books: ["深度工作", "数据化管理", "工作的迷思"] },
    { title: "转行与重新出发", route: "energy", books: ["精益创业", "商业模式新生代", "知的资本论：茑屋书店的经营之道"] },
    { title: "可迁移能力与长期作品", route: "energy", books: ["能力陷阱", "刻意练习", "精益创业", "知的资本论：茑屋书店的经营之道"] }
  ],
  power: [
    { title: "金钱意识与财务独立", route: "energy", books: ["富爸爸穷爸爸", "贫穷的本质", "稀缺", "债：第一个5000年"] },
    { title: "物质消费与品味区隔", route: "truth", books: ["格调：社会等级与生活品味", "商品帝国", "中国中间阶级文化品位与地位恐慌", "景观社会", "娱乐至死", "单向度的人", "低欲望社会"] },
    { title: "与物品相处：占有、消费与抵抗", route: "energy", books: ["存在的艺术", "生活的减法", "工作、消费主义和新穷人"] },
    { title: "劳动价值与剥削", route: "truth", books: ["学做工", "扫地出门：美国城市的贫穷与暴利", "资本主义的未来", "激荡十年，水大鱼大", "日本新中产阶级"] },
    { title: "阶层、教育与机会分配", route: "truth", books: ["文凭社会", "区分：判断力的社会批判", "格差社会", "当代中国社会分层", "社会学的邀请", "像社会学家一样思考"] },
    { title: "权力结构、制度与治理", route: "truth", books: ["权力精英", "皇权与绅权", "中国国家治理的制度逻辑", "支配社会学", "规训与惩罚", "新教伦理与资本主义精神", "新自由主义简史", "资本主义与二十一世纪", "纵乐的困惑：明代的商业与文化"] },
    { title: "公共表达与为理想投票", route: "energy", books: ["公共生活的发生", "广场与高塔", "身份政治：对尊严与认同的渴求", "想象的共同体", "六论自发性", "自由主义为何失败"] },
    { title: "平等的生活与公共正义", route: "energy", books: ["风险社会", "大象的政治：分层社会中的奋斗", "乡土中国", "动物庄园", "1984", "美丽新世界"] },
    { title: "现代性与时代精神", route: "truth", books: ["现代性", "现代性的五个悖论", "时代的精神状况", "我们时代的精神状况", "巨兽", "人类简史", "资本主义现实主义"] }
  ],
  wilderness: [
    { title: "毕业迷茫与人生岔路", route: "energy", books: ["明天也是小春日和", "火车快开", "一个人的好天气", "八月的星期天"] },
    { title: "三十岁焦虑与身份转变", route: "energy", books: ["东京八平米", "丹麦一年", "东京风格", "独立小店"] },
    { title: "离职、转行与重新开始", route: "energy", books: ["东京本屋", "莎士比亚书店", "全球书店步行"] },
    { title: "不婚不育与非标准人生", route: "energy", books: ["奥兰多", "深河", "西班牙主题变奏"] },
    { title: "城市空间与生活选择", route: "truth", books: ["城市小空间的社会生活", "重新发现市中心", "理想的城市", "走向新建筑", "嬗变的大都市：关于城市的一些观念", "美国大城市的死与生", "城市意象", "地方与无地方"] },
    { title: "关于爱远方：旅行、迁移与观看世界", route: "love", books: ["西班牙的灵魂", "西班牙旅行笔记", "带一本书去巴黎", "流动的盛宴", "旅行的艺术", "看不见的城市", "走出非洲", "波斯人札记", "在莫奈花园的下午"] },
    { title: "失去意义与重新寻找", route: "love", books: ["枯枝败叶", "罗生门", "芥川龙之介", "芥川龙之介短篇小说", "且听风吟", "金色梦乡", "苍狼"] },
    { title: "自然、荒野与精神避难所", route: "love", books: ["活山", "如何阅读一棵树", "树的秘密生命", "植物知道生命的答案", "大地上的事情", "冬牧场", "羊道三部曲", "遥远的向日葵地", "我的阿勒泰", "走夜路请放声歌唱", "阿勒泰的角落", "观看之道", "到灯塔去", "漫画二十四节气", "器物帖"] }
  ],
  time: [
    { title: "如何度过一生", route: "energy", books: ["百岁人生：长寿时代的生活和工作", "四千周", "时间游戏", "时间的秩序", "长日将尽"] },
    { title: "中年与生命阶段", route: "truth", books: ["持续焦虑", "日常的深处", "岁月的力量"] },
    { title: "更年期、老去与身体时间", route: "truth", books: ["论衰老", "最好的告别", "当呼吸化为空气", "最后死亡的是心脏", "生命最后的读书会"] },
    { title: "死亡、告别与哀悼", route: "love", books: ["下一站，天国", "隐墙", "时间停止的那一天"] },
    { title: "记忆、写作与自我保存", route: "love", books: ["悠悠岁月", "摄影小史", "物质生活", "追忆似水年华", "昨日的世界"] },
    { title: "代际传承与女性家族史", route: "love", books: ["秋园", "我本芬芳", "浮木", "哥本哈根三部曲"] },
    { title: "晚年创造", route: "energy", books: ["艺术的转向", "欲望的先知"] },
    { title: "长寿时代的自由", route: "energy", books: ["百年孤独", "时间的秩序", "长日将尽"] }
  ]
};

const topicIssueQuestions = {
  self: [
    ["怎样爱家人，却不再执行必须懂事和牺牲的家庭脚本？", "如何分辨自己的愿望，与父母替我安排的安全人生？"],
    ["为什么我们会把顺从、优秀和不添麻烦当成自我价值？", "当外界评价安静下来，我还听得见自己真正想要什么吗？"],
    ["在婚恋、容貌和职场评价之外，女性如何建立不依附认可的自尊？", "为什么女性为自己争取位置时，常常先感到羞耻或内疚？"],
    ["考试、名校和文凭怎样塑造了我对成功与失败的想象？", "如果学历光环消失，我还能依据什么确认自己的能力和价值？"],
    ["我们拒绝照顾所有人的情绪时，为什么容易被指责为自私？", "怎样划清责任边界，又不被熟人社会的愧疚感拖回去？"],
    ["独居、单身或离开熟悉关系后，怎样把孤独变成自我陪伴？", "如果不再用忙碌和关系填满时间，我是否仍能安稳地和自己相处？"],
    ["为什么我们追求自由时，常被安全、孝顺和稳定的叙事拉住？", "自由究竟是离开限制，还是承担自己选择的后果？"],
    ["经济独立、思想独立和情感独立之间，哪一种最容易被忽略？", "当家庭资源附带服从条件时，我能把独立推进到什么程度？"],
    ["我们怎样确认自己的经验值得被写下、说出和公开讨论？", "当表达不被理解甚至被贬低时，如何保护持续创作的精神生活？"]
  ],
  body: [
    ["女性的疼痛和不适为什么常被家庭与医疗系统轻描淡写？", "怎样学习身体知识，不再把月经、疾病和脆弱当成羞耻？"],
    ["当漂亮被当作女性最重要的资本时，如何区分审美愉悦与自我物化？", "如果不再追逐异性青睐，我会怎样重新看待自己的脸和身体？"],
    ["我们如何在沉默的性教育里学习同意、欲望和身体自主？", "怎样分辨自己的欲望，与为了被爱而表演出来的欲望？"],
    ["当婚育被描述成女性的必经之路，我如何做出真正属于自己的选择？", "成为母亲、不成为母亲，以及后悔的可能，能否都被诚实讨论？"],
    ["当女性因年龄增长而逐渐退出审美中心，身体价值该如何重建？", "面对衰老和生命有限，我怎样照顾身体而不陷入抗衰焦虑？"],
    ["为什么女性进入夜晚、街道、交通和城市公共空间时需要额外警觉？", "城市怎样设计，才能让女性的行动不再以恐惧为前提？"],
    ["羞耻、暴力和长期压抑如何留在身体反应与亲密关系里？", "当身体先于语言记住伤害时，疗愈可以从哪里开始？"],
    ["如何停止把身体当成需要不断改造和管理的项目？", "饮食、运动和休息怎样从自我惩罚变成与身体合作？"],
    ["阅读不同女性的一生，怎样拓宽我对成功、爱情和老去的想象？", "当主流叙事缺少女性样本时，我可以向哪些人生寻找参照？"]
  ],
  relationships: [
    ["为什么我们容易在爱情里承担更多理解、照顾和自我改变？", "怎样亲密地爱一个人，同时不把自己的边界和未来交出去？"],
    ["除了伴侣之爱，照护、邻里和共同生活如何支撑一个人的生命？", "同情别人时，怎样避免把照护再次固定为某一个人的无偿责任？"],
    ["理解母亲的局限，是否意味着必须原谅她带来的伤害？", "女儿怎样停止继承母亲未完成的人生，又不否认彼此的牵连？"],
    ["婚姻与家庭中看不见的家务和情绪劳动，为什么仍多由女性承担？", "当贤妻良母成为默认标准，伴侣如何重新谈判时间、金钱与责任？"],
    ["在伴侣与原生家庭之外，我们怎样建立稳定的友情和日常支持网络？", "为什么成年人的友谊常被工作、婚育和迁移挤到生活边缘？"],
    ["怎样分辨爱、依恋、占有和害怕被抛弃之间的差别？", "关系结束之后，我们如何哀悼失去而不否定曾经的自己？"],
    ["为什么我们表达拒绝或不满时，常被要求更温柔、更体谅？", "怎样诚实沟通、划清课题，又不把冲突理解成关系失败？"],
    ["人情、面子和关系网络怎样影响个体的机会、婚恋与家庭责任？", "在熟人社会中说不时，如何承受被评价和被排除的风险？"]
  ],
  career: [
    ["选择职业时，我是在追随能力与兴趣，还是在服从稳定和体面的期待？", "我们怎样评估一份工作对收入、成长、照护责任和生活空间的真实影响？"],
    ["为什么表达野心时容易被认为强势、功利或不合群？", "怎样允许自己争取成就，而不必先证明自己足够谦逊和无害？"],
    ["职场里哪些看似中性的规则，实际上把男性人生当作默认模板？", "面对隐性门槛和性别偏见，我如何判断是调整策略还是离开环境？"],
    ["第一次带团队时，我们怎样在权威与讨好之间找到自己的领导方式？", "协作文化如何避免让某些个体再次承担更多沟通和情绪劳动？"],
    ["为什么我们在会议、谈判和冲突中容易自我审查？", "怎样提出判断、价格和要求，而不为占用空间反复道歉？"],
    ["当敬业文化吞掉休息与照护时间，我们如何建立工作边界？", "倦怠究竟来自个人效率不足，还是长期过载的组织与家庭结构？"],
    ["转行或重新开始时，怎样摆脱年龄、沉没成本和履历断裂的恐惧？", "我们如何把过去经验重新命名为能力，而不是失败的证明？"],
    ["哪些能力能够跨越行业、组织与人生阶段继续积累？", "怎样把零散工作变成长期作品，而不只留下服务组织的痕迹？"]
  ],
  power: [
    ["为什么我们会谈感情、谈工作，却羞于公开谈收入、债务和资产？", "财务独立除了赚钱，还需要怎样的风险意识与资源配置能力？"],
    ["消费怎样借由容貌、婚礼、育儿和体面生活制造焦虑？", "我的品味是自由选择，还是在用商品证明自己属于某个阶层？"],
    ["物品是在服务生活，还是替我维持身份、安全感和他人认可？", "我们如何抵抗以精致、自律和照护之名不断增加的消费负担？"],
    ["家务、照护与情绪劳动为何创造价值，却经常没有价格和权利？", "当工作要求无限投入时，谁在承担被隐藏和被转嫁的成本？"],
    ["家庭出身、户籍、教育和关系网络如何塑造个体看似个人的机会？", "承认结构限制之后，怎样行动而不把失败全部归咎于自己？"],
    ["权力如何藏在规则、专业语言、组织流程和日常服从里？", "我们怎样识别谁能定义问题、分配资源并决定谁可以发言？"],
    ["个体把私人经验公开表达时，为什么可能遭遇羞辱和审查？", "怎样把个人不适转化成能被共同讨论和推动改变的公共问题？"],
    ["平等是否只意味着个人可以竞争，还是也包括照护、住房和安全的公共保障？", "我能如何通过消费、表达、组织与投票参与更公正的共同生活？"],
    ["现代生活为何一边承诺自由，一边制造孤独、加速和无力感？", "我们如何理解自己所处时代，而不把系统性焦虑误认成个人缺陷？"]
  ],
  wilderness: [
    ["毕业后没有清晰方向，是个人失败还是第一次真正面对开放人生？", "当标准答案消失，我该用什么尺度选择第一份工作和生活？"],
    ["为什么三十岁常被我们感受为婚育、职业与容貌的多重截止线？", "如果不按社会时钟生活，我想怎样定义这一阶段的成熟？"],
    ["离开稳定工作之后，怎样承受身份真空、收入波动和他人质疑？", "重新开始时，哪些旧经验值得带走，哪些成功标准应该放下？"],
    ["不婚、不育或非传统伴侣关系，如何在家庭压力中成为可持续生活？", "当没有现成脚本可以模仿，我怎样为非标准人生建立支持系统？"],
    ["城市的房价、通勤、安全与文化资源，怎样影响个体能选择的生活？", "我选择一座城市时，是在追逐机会，还是在寻找能长期呼吸的日常？"],
    ["旅行和迁移如何帮助我们离开熟悉凝视，重新观看自己与世界？", "向往远方是在逃避当下，还是在扩大可选择生活的边界？"],
    ["当工作、关系和消费都无法提供意义时，生活还能从哪里重新开始？", "怎样允许迷失存在，而不急于用新的目标再次填满自己？"],
    ["自然为何能成为过载生活之外的精神避难所？", "我们进入荒野时，如何同时经验自由、身体力量与现实安全？"]
  ],
  time: [
    ["当人生可能持续一百年，我们如何重新安排学习、工作、照护和休息？", "怎样度过一生，才不会只剩下完成社会规定的时间表？"],
    ["中年是失去青春，还是重新评估关系、工作和自我的机会？", "当照护父母与支持下一代同时发生，我们怎样保留自己的时间？"],
    ["更年期与衰老为何长期缺少公开知识和真实叙述？", "身体进入新的阶段后，个体如何争取医疗理解、欲望与生活自主？"],
    ["面对父母、伴侣和自己的死亡，怎样学习告别而不回避悲伤？", "东亚家庭不习惯谈死亡时，我们如何做出医疗与照护决定？"],
    ["记录日常、写作和摄影，怎样保存常被忽略的个人经验？", "当记忆不断被家庭角色覆盖，我如何留下属于自己的生命版本？"],
    ["女性家族史中有哪些沉默、牺牲与未被命名的愿望？", "理解上一代女性的命运后，我能终止什么，又想传承什么？"],
    ["当职业和家庭角色淡出，晚年还能开始怎样的学习与创造？", "为什么个体的创造力不应被青春、效率和市场价值限定？"],
    ["寿命变长之后，我们如何把晚年从被照护阶段变成新的自由时期？", "财务、友谊、居住和身体准备，怎样支撑一个有选择的老年？"]
  ]
};

const legacyBooks = [
  { id: "returning", topic: "origin", title: "回归故里", author: "[法] 迪迪埃·埃里蓬", cover: "/img/books/34942789.jpg", link: "https://book.douban.com/subject/34942789/", why: "从个人返乡进入阶层、羞耻与家庭记忆，理解我们为什么既想逃离来处，又终生携带它。", prompt: "我以为属于自己的哪些性格，其实是一段家庭与阶层历史？" },
  { id: "copenhagen", topic: "origin", title: "哥本哈根三部曲", author: "[丹麦] 托芙·迪特莱弗森", cover: "/img/books/36823202.jpg", link: "https://book.douban.com/subject/36823202/", why: "以女性成长、自我书写与亲密创伤，呈现一个女孩如何在家庭和欲望中寻找自己的声音。", prompt: "一个女孩第一次意识到自己的声音时，世界发生了什么？" },
  { id: "identity-politics", topic: "identity", title: "身份政治", author: "[美] 弗朗西斯·福山", cover: "/img/books/35604961.jpg", link: "https://book.douban.com/subject/35604961/", why: "理解尊严、认同和群体归属如何成为现代政治与个人生活中的重要力量。", prompt: "我在争取的是被看见、被尊重，还是被某个群体接纳？" },
  { id: "status-anxiety", topic: "identity", title: "身份的焦虑", author: "[英] 阿兰·德波顿", cover: "", link: "", why: "把比较、成功想象与社会评价放在一起看，辨认身份焦虑从何而来。", prompt: "如果不再向任何人证明自己，我会怎样定义成功？" },
  { id: "tyranny-merit", topic: "identity", title: "精英的傲慢", author: "[美] 迈克尔·桑德尔", cover: "", link: "", why: "质疑“成功全靠努力”的单一叙事，重新看待运气、结构与共同责任。", prompt: "我如何评价别人，也在如何苛责自己？" },
  { id: "credential", topic: "education", title: "文凭社会", author: "[美] 兰德尔·柯林斯", cover: "/img/books/30143236.jpg", link: "https://book.douban.com/subject/30143236/", why: "解释学历竞争为什么不断升级，以及教育如何成为职业筛选与社会分层机制。", prompt: "文凭给了我什么，又让我把什么误认为能力？" },
  { id: "desire", topic: "desire", title: "欲望的演化", author: "[美] 戴维·巴斯", cover: "/img/books/35153840.jpg", link: "https://book.douban.com/subject/35153840/", why: "提供理解择偶策略的一种视角，同时提醒我们继续追问文化与权力如何改写欲望。", prompt: "哪些所谓天性，需要被更多证据和女性经验重新检验？" },
  { id: "art-being", topic: "consume", title: "存在的艺术", author: "[美] 艾里希·弗洛姆", cover: "", link: "", why: "从“占有”转向“存在”，把生活价值从拥有多少重新放回体验、创造与关系。", prompt: "如果不通过占有证明自己，我会如何生活？" },
  { id: "poverty", topic: "consume", title: "贫穷的本质", author: "[印度] 阿比吉特·班纳吉", cover: "/img/books/30161884.jpg", link: "https://book.douban.com/subject/30161884/", why: "理解匮乏背后的具体选择与制度环境，避免用个人意志解释复杂的贫穷。", prompt: "我对“理性选择”的想象，忽略了哪些现实限制？" },
  { id: "work-myth", topic: "work", title: "工作的迷思", author: "[英] 阿兰·德波顿", cover: "/img/books/35542573.jpg", link: "https://book.douban.com/subject/35542573/", why: "观察现代职业的分工、意义和荒谬，松动“工作必须实现全部自我”的压力。", prompt: "工作在我的生活里，究竟应该承担多少意义？" },
  { id: "feminist-city", topic: "city", title: "女性主义城市", author: "[加] 莱斯莉·克恩", cover: "/img/books/36953607.jpg", link: "https://book.douban.com/subject/36953607/", why: "从安全、照护、交通与公共空间出发，看见城市如何以某种默认身体被设计。", prompt: "一座真正欢迎女性的城市，需要改变哪些日常细节？" },
  { id: "private-life", topic: "family", title: "私人生活的变革", author: "阎云翔", cover: "/img/books/26952345.jpg", link: "https://book.douban.com/subject/26952345/", why: "通过家庭、爱情与个体化的变化，理解私人选择如何与时代结构彼此塑造。", prompt: "我的家庭想象属于我，还是属于一个正在变化的时代？" },
  { id: "birth-system", topic: "birth", title: "生育制度", author: "费孝通", cover: "", link: "", why: "把生育放进社会继替、家庭制度与文化结构中，理解它从来不只是私人事件。", prompt: "谁定义生育的价值，谁又承担它真实的成本？" },
  { id: "hundred-year", topic: "aging", title: "百岁人生", author: "[英] 琳达·格拉顿", cover: "/img/books/30245089.jpg", link: "https://book.douban.com/subject/30245089/", why: "长寿让线性人生脚本失效，也让学习、工作、关系与休息获得重新组合的可能。", prompt: "如果人生还有很长，我现在需要积累怎样的活力资产？" },
  { id: "misogyny", topic: "family", title: "厌女", author: "上野千鹤子", cover: "/img/books/25836270.jpg", link: "https://book.douban.com/subject/25836270/", why: "辨认厌女如何存在于制度、关系和女性自身的评价体系中。", prompt: "我曾在哪些时刻用父权标准评价其他女性和自己？" },
  { id: "art-loving", topic: "intimate", title: "爱的艺术", author: "[美] 艾里希·弗洛姆", cover: "/img/books/3026879.jpg", link: "https://book.douban.com/subject/3026879/", why: "把爱从被动的幸运改写为需要认识、责任、尊重与实践的能力。", prompt: "我是在寻找一个值得爱的人，还是在学习如何去爱？" },
  { id: "limits", topic: "intimate", title: "始于极限", author: "[日] 上野千鹤子 / 铃木凉美", cover: "/img/books/35966120.jpg", link: "https://book.douban.com/subject/35966120/", why: "两代女性从性、工作、母女关系与自由出发，诚实交换彼此不能轻易和解的经验。", prompt: "女性之间怎样在分歧中继续理解，而不急着得出统一答案？" },
  { id: "nvc", topic: "universal", title: "非暴力沟通", author: "[美] 马歇尔·卢森堡", cover: "/img/books/3533221.jpg", link: "https://book.douban.com/subject/3533221/", why: "练习区分观察、感受、需要与请求，让表达不再依赖指责、羞耻或操控。", prompt: "在一次冲突里，我真正需要的是什么？" },
  { id: "feminist-life", topic: "universal", title: "过一种女性主义的生活", author: "[英] 萨拉·艾哈迈德", cover: "/img/books/36494081.jpg", link: "https://book.douban.com/subject/36494081/", why: "让女性主义从概念进入日常生活：成为扫兴者、指出问题，也彼此扶持。", prompt: "当我指出房间里的问题时，为什么常常被说成制造问题的人？" },
  { id: "all-creatures", topic: "faraway", title: "万物有灵且美", author: "[英] 吉米·哈利", cover: "", link: "", why: "通过人与动物的相遇，恢复对具体生命的耐心、幽默与温柔。", prompt: "我是否仍然愿意被一个与自己无关的生命打动？" },
  { id: "silent-spring", topic: "faraway", title: "寂静的春天", author: "[美] 蕾切尔·卡森", cover: "", link: "", why: "理解自然并非无尽资源，关爱远方也意味着看见行动跨越时间和空间的后果。", prompt: "今天看不见的代价，会在谁的春天里出现？" },
  { id: "care-manifesto", topic: "care", title: "照护宣言", author: "The Care Collective", cover: "", link: "", why: "把照护从家庭内部的女性责任，扩展为社会、经济与公共制度的共同原则。", prompt: "如果照护成为公共价值，我们的城市和工作会怎样改变？" },
  { id: "second-shift", topic: "care", title: "第二轮班", author: "[美] 阿莉·霍赫希尔德", cover: "", link: "", why: "看见有偿工作之外，家务、育儿与情绪劳动如何形成女性的第二轮班。", prompt: "共同生活里的时间、责任和休息真的被公平分配了吗？" },
  { id: "escape-freedom", topic: "relative-freedom", title: "逃避自由", author: "[美] 艾里希·弗洛姆", cover: "/img/books/26418475.jpg", link: "https://book.douban.com/subject/26418475/", why: "自由会带来孤独与责任，人也可能主动逃回权威、从众和自动化生活。", prompt: "我在哪些时候宁愿服从一个答案，也不愿承担选择？" },
  { id: "disobedience", topic: "relative-freedom", title: "论不服从", author: "[美] 艾里希·弗洛姆", cover: "/img/books/27063276.jpg", link: "https://book.douban.com/subject/27063276/", why: "不服从并非为了反对一切，而是保留判断、拒绝不义和对自己负责。", prompt: "我正在服从什么，又为什么服从？" },
  { id: "old-girl", topic: "independence", title: "老女孩", author: "[法] 玛丽·科克", cover: "/img/books/37132581.jpg", link: "https://book.douban.com/subject/37132581/", why: "重新看待单身、年龄与非标准人生，松动女性必须按时完成的人生清单。", prompt: "如果不把婚姻视为成人资格，我还想怎样长大？" },
  { id: "hedgehog", topic: "independence", title: "刺猬的优雅", author: "[法] 妙莉叶·芭贝里", cover: "", link: "", why: "在社会身份之外保存内在世界，也让相遇成为改变生活秩序的缝隙。", prompt: "别人看见的我，与我真正生活着的内在世界相距多远？" },
  { id: "personal-growth", topic: "self", title: "聪明人的个人成长", author: "[美] 史蒂夫·帕弗利纳", cover: "/img/books/36018994.jpg", link: "https://book.douban.com/subject/36018994/", why: "从原则、选择与行动出发，搭建可以持续修正的个人生活框架。", prompt: "我现在最需要增强的不是效率，而是哪一种生活能力？" },
  { id: "burnout", topic: "self", title: "倦怠社会", author: "[德] 韩炳哲", cover: "", link: "", why: "理解自我驱动如何变成自我剥削，为什么“我可以”最终可能耗尽一个人。", prompt: "我是在追求自由，还是成为了自己的监工？" },
  { id: "courage-disliked", topic: "others", title: "被讨厌的勇气", author: "[日] 岸见一郎 / 古贺史健", cover: "/img/books/26369699.jpg", link: "https://book.douban.com/subject/26369699/", why: "借由课题分离，练习不替别人生活，也不要求别人为自己的情绪负责。", prompt: "这是谁的课题？我能负责的部分到哪里为止？" },
  { id: "art-tidying", topic: "objects", title: "生活的减法", author: "松浦弥太郎 等", cover: "", link: "", why: "以微小而具体的方式重新检查物品、消费、空间与时间的关系。", prompt: "什么正在占据空间，却没有真正服务我的生活？" },
  { id: "work-consumerism", topic: "objects", title: "工作、消费主义和新穷人", author: "[英] 齐格蒙特·鲍曼", cover: "", link: "", why: "理解消费社会如何重塑劳动伦理、贫穷定义与人的社会价值。", prompt: "当人的价值由消费能力决定，谁会被排除在体面生活之外？" },
  { id: "scarcity", topic: "equality", title: "稀缺", author: "[美] 塞德希尔·穆来纳森", cover: "/img/books/36110828.jpg", link: "https://book.douban.com/subject/36110828/", why: "稀缺会占据认知带宽。理解这一点，是从道德评判走向制度支持的开始。", prompt: "一个人缺少的或许不只是钱，还有多少可以思考未来的余裕？" },
  { id: "public-life", topic: "public", title: "公共生活的发生", author: "张康之 / 张乾友", cover: "/img/books/36799222.jpg", link: "https://book.douban.com/subject/36799222/", why: "讨论公共生活如何形成，以及个体怎样从私人关切走向共同世界。", prompt: "一件私人的不适，何时会成为值得共同讨论的公共问题？" },
  { id: "suppress-writing", topic: "public", title: "如何抑制女性写作", author: "乔安娜·拉斯", cover: "/img/books/35229199.jpg", link: "https://book.douban.com/subject/35229199/", why: "揭示女性创作如何被忽略、贬低与重新归因，也帮助我们识别这些话术。", prompt: "一个女性的表达，是怎样在真正被阅读之前就被取消的？" },
  { id: "women-feminism", topic: "public", title: "女性主义", author: "李银河", cover: "/img/books/30276984.jpg", link: "https://book.douban.com/subject/30276984/", why: "从基本概念和历史脉络进入女性主义，为个人经验找到更大的解释框架。", prompt: "当个人经验获得名字，我们能开始怎样的行动？" },
  { id: "power-elite", topic: "equality", title: "权力精英", author: "[美] C. 赖特·米尔斯", cover: "/img/books/27025112.jpg", link: "https://book.douban.com/subject/27025112/", why: "理解权力如何在政治、商业与军事组织之间集中，也重新审视个人选择的边界。", prompt: "决定我们共同生活的重要选择，究竟掌握在谁手中？" }
];

const topicPositions = [
  { x: 18, y: 31 }, { x: 48, y: 27 }, { x: 76, y: 33 },
  { x: 25, y: 48 }, { x: 54, y: 47 }, { x: 80, y: 51 },
  { x: 20, y: 68 }, { x: 49, y: 67 }, { x: 75, y: 72 }
];

function compactTopicLabel(title) {
  const base = title.split("：")[0];
  return base.length > 9 ? `${base.slice(0, 8)}…` : base;
}

function comparableBookTitle(title) {
  return title.replace(/[：:].*$/, "").replace(/[？?]/g, "").trim();
}

function legacyMetadataFor(title) {
  const comparable = comparableBookTitle(title);
  return legacyBooks.find((book) => comparableBookTitle(book.title) === comparable);
}

const topics = [];
const books = [];

Object.entries(topicCatalog).forEach(([regionId, catalogTopics]) => {
  catalogTopics.forEach((catalogTopic, topicIndex) => {
    const topicId = `${regionId}-${topicIndex + 1}`;
    const position = topicPositions[topicIndex];
    const bookCount = catalogTopic.books.length;
    topics.push({
      id: topicId,
      region: regionId,
      route: catalogTopic.route,
      title: catalogTopic.title,
      mapLabel: compactTopicLabel(catalogTopic.title),
      article: bookCount ? `${bookCount} 本成长路书` : "书单继续生长中",
      question: `当我走到“${catalogTopic.title}”这一站，真正想理解和改变的是什么？`,
      note: bookCount
        ? `这一站收录 ${bookCount} 本书。它们不是标准答案，而是从不同方向照亮同一个人生问题。`
        : "这是地图中预留的一处重要路标，完整书单仍在继续生长。",
      x: position.x,
      y: position.y
    });

    catalogTopic.books.forEach((title, bookIndex) => {
      const legacy = legacyMetadataFor(title);
      const growthQuestions = topicIssueQuestions[regionId]?.[topicIndex] || [
        `这本书会怎样改变我对“${catalogTopic.title}”的理解？`,
        `在我们的生活经验里，“${catalogTopic.title}”为什么尤其值得被讨论？`
      ];
      books.push({
        id: `book-${regionId}-${topicIndex + 1}-${bookIndex + 1}`,
        topic: topicId,
        title,
        author: legacy?.author || "",
        cover: legacy?.cover || "",
        link: legacy?.link || doubanSearchUrl(title),
        questions: growthQuestions,
        why: growthQuestions.map((question, index) => `${index + 1}. ${question}`).join(" "),
        prompt: growthQuestions[0]
      });
    });
  });
});

function doubanSearchUrl(title) {
  return `https://search.douban.com/book/subject_search?search_text=${encodeURIComponent(title)}`;
}

function normalizeMetadataTitle(title) {
  return String(title || "").replace(/[\s？?：:（）()·]/g, "").toLowerCase();
}

async function hydrateBookMetadata() {
  try {
    const response = await fetch("./books-data.json", { credentials: "same-origin" });
    if (!response.ok) return;
    const payload = await response.json();
    const metadata = new Map((payload.books || []).map((book) => [normalizeMetadataTitle(book.title), book]));
    books.forEach((book) => {
      const match = metadata.get(normalizeMetadataTitle(book.title));
      if (!match) return;
      book.author = match.author || book.author;
      book.cover = match.cover || book.cover;
      book.link = match.link || book.link;
      if (Array.isArray(match.questions) && match.questions.length === 2) {
        book.questions = match.questions;
        book.why = match.questions[0];
        book.prompt = match.questions[0];
      }
    });
  }
  catch (_) {}
}

const questionCatalog = [
  { id: "question-self-leave-home", region: "self", text: "当你第一次离开家", topicIds: ["self-1", "self-6", "self-8"] },
  { id: "question-self-not-good-enough", region: "self", text: "当你怀疑自己不够好", topicIds: ["self-2", "self-3"] },
  { id: "question-self-people-pleasing", region: "self", text: "当你发现自己一直在讨好别人", topicIds: ["self-5"] },
  { id: "question-self-who-am-i", region: "self", text: "当你想知道“我到底是谁”", topicIds: ["self-2", "self-3"] },
  { id: "question-self-expectations", region: "self", text: "当你开始不想再活成别人期待的样子", topicIds: ["self-7", "self-8", "self-9"] },
  { id: "question-self-solitude", region: "self", text: "当你需要学会独处", topicIds: ["self-6"] },
  { id: "question-self-inner-voice", region: "self", text: "当你想重新听见自己的声音", topicIds: ["self-2", "self-9"] },
  { id: "question-self-freedom", region: "self", text: "当你想知道自由从哪里开始", topicIds: ["self-7", "self-8"] },

  { id: "question-body-feel", region: "body", text: "当你第一次认真感受自己的身体", topicIds: ["body-1", "body-8"] },
  { id: "question-body-appearance", region: "body", text: "当你被容貌焦虑困住", topicIds: ["body-2"] },
  { id: "question-body-desire", region: "body", text: "当你开始重新理解欲望", topicIds: ["body-3"] },
  { id: "question-body-marriage-birth", region: "body", text: "当你不知道是否要结婚或生育", topicIds: ["body-4"] },
  { id: "question-body-aging", region: "body", text: "当你害怕身体衰老", topicIds: ["body-5"] },
  { id: "question-body-shame", region: "body", text: "当你想从羞耻感里走出来", topicIds: ["body-7", "body-8"] },
  { id: "question-body-trauma", region: "body", text: "当你意识到身体也会记住伤害", topicIds: ["body-7"] },
  { id: "question-body-interpretation", region: "body", text: "当你想重新夺回身体的解释权", topicIds: ["body-3", "body-8"] },

  { id: "question-relationships-lose-self", region: "relationships", text: "当爱情让你失去自己", topicIds: ["relationships-1", "relationships-7"] },
  { id: "question-relationships-love-dependence", region: "relationships", text: "当你分不清爱与依赖", topicIds: ["relationships-1", "relationships-6"] },
  { id: "question-relationships-boundaries", region: "relationships", text: "当你想在亲密关系里保留边界", topicIds: ["relationships-1", "relationships-7"] },
  { id: "question-relationships-mother", region: "relationships", text: "当你开始重新理解母亲", topicIds: ["relationships-3"] },
  { id: "question-relationships-family-duty", region: "relationships", text: "当你被家庭责任拉扯", topicIds: ["relationships-4"] },
  { id: "question-relationships-lonely", region: "relationships", text: "当你在关系里感到孤独", topicIds: ["relationships-6"] },
  { id: "question-relationships-communicate", region: "relationships", text: "当你想练习更诚实地沟通", topicIds: ["relationships-7"] },
  { id: "question-relationships-labor", region: "relationships", text: "当你发现“爱”也有劳动和代价", topicIds: ["relationships-2", "relationships-4"] },
  { id: "question-relationships-network", region: "relationships", text: "当你想理解人情社会里的自己", topicIds: ["relationships-8"] },

  { id: "question-career-burnout", region: "career", text: "当工作耗尽你的热情", topicIds: ["career-6"] },
  { id: "question-career-job-hop", region: "career", text: "当你不知道要不要跳槽", topicIds: ["career-1"] },
  { id: "question-career-new-path", region: "career", text: "当你想换一条职业路径", topicIds: ["career-7", "career-8"] },
  { id: "question-career-ambition", region: "career", text: "当你不确定自己有没有野心", topicIds: ["career-2"] },
  { id: "question-career-speak", region: "career", text: "当你在职场里不敢表达", topicIds: ["career-3", "career-5"] },
  { id: "question-career-negotiate", region: "career", text: "当你想学会谈判和争取", topicIds: ["career-5"] },
  { id: "question-career-lead", region: "career", text: "当你第一次开始带人或协作", topicIds: ["career-4"] },
  { id: "question-career-transferable", region: "career", text: "当你想建立可迁移的能力", topicIds: ["career-8"] },
  { id: "question-career-long-work", region: "career", text: "当你想把工作变成长期作品", topicIds: ["career-8"] },

  { id: "question-power-money", region: "power", text: "当你开始想认真谈钱", topicIds: ["power-1"] },
  { id: "question-power-effort", region: "power", text: "当你意识到努力并不能解释一切", topicIds: ["power-4", "power-5", "power-6"] },
  { id: "question-power-class", region: "power", text: "当你想理解阶层如何塑造命运", topicIds: ["power-5"] },
  { id: "question-power-consumption", region: "power", text: "当你开始怀疑消费主义", topicIds: ["power-2", "power-3"] },
  { id: "question-power-education", region: "power", text: "当你发现教育并不只是学习", topicIds: ["power-5"] },
  { id: "question-power-operation", region: "power", text: "当你想看清权力如何运转", topicIds: ["power-6"] },
  { id: "question-power-poverty", region: "power", text: "当你想知道贫穷为什么难以摆脱", topicIds: ["power-1", "power-4"] },
  { id: "question-power-public-life", region: "power", text: "当你想理解公共生活为什么重要", topicIds: ["power-7"] },
  { id: "question-power-equality", region: "power", text: "当你想为更平等的生活投票", topicIds: ["power-8"] },

  { id: "question-wilderness-graduate", region: "wilderness", text: "当你毕业后感到迷茫", topicIds: ["wilderness-1"] },
  { id: "question-wilderness-thirty", region: "wilderness", text: "当你站在三十岁的路口", topicIds: ["wilderness-2"] },
  { id: "question-wilderness-nonstandard", region: "wilderness", text: "当你想离开一条标准人生", topicIds: ["wilderness-4"] },
  { id: "question-wilderness-restart", region: "wilderness", text: "当你想重新开始", topicIds: ["wilderness-3", "wilderness-7"] },
  { id: "question-wilderness-live", region: "wilderness", text: "当你不知道该去哪里生活", topicIds: ["wilderness-5"] },
  { id: "question-wilderness-escape", region: "wilderness", text: "当你想逃离但又不知道去向", topicIds: ["wilderness-3", "wilderness-7"] },
  { id: "question-wilderness-city", region: "wilderness", text: "当你开始认真观察城市", topicIds: ["wilderness-5"] },
  { id: "question-wilderness-distance", region: "wilderness", text: "当远方不再只是旅行目的地", topicIds: ["wilderness-6"] },
  { id: "question-wilderness-refuge", region: "wilderness", text: "当你需要一个精神避难所", topicIds: ["wilderness-8"] },

  { id: "question-time-aging", region: "time", text: "当你开始面对父母和自己的衰老", topicIds: ["time-3", "time-6"] },
  { id: "question-time-death", region: "time", text: "当你第一次认真想到死亡", topicIds: ["time-4"] },
  { id: "question-time-life", region: "time", text: "当你想知道一生应该怎样度过", topicIds: ["time-1", "time-8"] },
  { id: "question-time-not-enough", region: "time", text: "当你感到时间越来越不够用", topicIds: ["time-1"] },
  { id: "question-time-midlife", region: "time", text: "当你想理解中年", topicIds: ["time-2"] },
  { id: "question-time-look-back", region: "time", text: "当你开始回望自己的来路", topicIds: ["time-5", "time-6"] },
  { id: "question-time-women-family", region: "time", text: "当你想理解女性家族的命运", topicIds: ["time-6"] },
  { id: "question-time-farewell", region: "time", text: "当你需要学习告别", topicIds: ["time-4"] },
  { id: "question-time-long-view", region: "time", text: "当你想在更长的时间里安放自己", topicIds: ["time-1", "time-8"] }
];

const featuredQuestionTexts = [
  "当你第一次离开家", "当你怀疑自己不够好", "当爱情让你失去自己", "当你不知道是否要结婚或生育",
  "当工作耗尽你的热情", "当你不知道要不要跳槽", "当你开始想认真谈钱", "当你意识到努力并不能解释一切",
  "当你站在三十岁的路口", "当你想重新开始", "当你开始面对父母和自己的衰老", "当你想知道一生应该怎样度过"
];

const ageTopicMap = {
  "18-25": [
    "self-1", "self-2", "self-3", "self-4", "self-5", "self-6", "self-7", "self-9",
    "body-1", "body-2", "body-3", "body-6", "body-7", "body-8",
    "relationships-1", "relationships-5", "relationships-7", "relationships-8",
    "career-1", "career-3", "career-5", "career-8",
    "power-1", "power-2", "power-5", "power-6",
    "wilderness-1", "wilderness-3", "wilderness-5", "wilderness-6", "wilderness-8",
    "time-1", "time-5"
  ],
  "25-35": [
    "self-1", "self-2", "self-3", "self-5", "self-7", "self-8", "self-9",
    "body-2", "body-3", "body-4", "body-6", "body-7", "body-8",
    "relationships-1", "relationships-2", "relationships-3", "relationships-4", "relationships-5", "relationships-6", "relationships-7", "relationships-8",
    "career-1", "career-2", "career-3", "career-4", "career-5", "career-6", "career-7", "career-8",
    "power-1", "power-2", "power-3", "power-4", "power-5", "power-7",
    "wilderness-2", "wilderness-3", "wilderness-4", "wilderness-5", "wilderness-6", "wilderness-7", "wilderness-8",
    "time-1", "time-2", "time-5"
  ],
  "35-45": [
    "self-1", "self-2", "self-3", "self-5", "self-8", "self-9",
    "body-3", "body-4", "body-5", "body-7", "body-8", "body-9",
    "relationships-1", "relationships-2", "relationships-3", "relationships-4", "relationships-5", "relationships-6", "relationships-7", "relationships-8",
    "career-2", "career-3", "career-4", "career-5", "career-6", "career-7", "career-8",
    "power-1", "power-2", "power-3", "power-4", "power-5", "power-6", "power-7", "power-8", "power-9",
    "wilderness-2", "wilderness-3", "wilderness-4", "wilderness-5", "wilderness-7", "wilderness-8",
    "time-1", "time-2", "time-3", "time-4", "time-5", "time-6"
  ],
  "45-60": [
    "self-2", "self-3", "self-6", "self-7", "self-8", "self-9",
    "body-1", "body-3", "body-5", "body-7", "body-8", "body-9",
    "relationships-2", "relationships-3", "relationships-4", "relationships-5", "relationships-7", "relationships-8",
    "career-2", "career-3", "career-4", "career-5", "career-6", "career-8",
    "power-1", "power-2", "power-3", "power-4", "power-5", "power-6", "power-7", "power-8", "power-9",
    "wilderness-5", "wilderness-6", "wilderness-7", "wilderness-8",
    "time-1", "time-2", "time-3", "time-4", "time-5", "time-6", "time-7"
  ],
  "60+": [
    "self-2", "self-6", "self-7", "self-8", "self-9",
    "body-1", "body-5", "body-7", "body-8", "body-9",
    "relationships-2", "relationships-3", "relationships-5", "relationships-7", "relationships-8",
    "career-8",
    "power-1", "power-7", "power-8",
    "wilderness-5", "wilderness-6", "wilderness-8",
    "time-1", "time-2", "time-3", "time-4", "time-5", "time-6", "time-7", "time-8"
  ]
};

const overviewTopicIds = new Set([
  "self-1", "self-7",
  "body-1", "body-8",
  "relationships-1", "relationships-7",
  "career-1", "career-6",
  "power-1", "power-6",
  "wilderness-1", "wilderness-8",
  "time-1", "time-4"
]);

const regionClass = {
  self: "terrain--self",
  body: "terrain--body",
  relationships: "terrain--relationships",
  career: "terrain--career",
  power: "terrain--power",
  wilderness: "terrain--wilderness",
  time: "terrain--time"
};
const terrainLayer = document.querySelector("#terrainLayer");
const routePanel = document.querySelector("#routePanel");
const panelBooks = document.querySelector("#panelBooks");
const searchInput = document.querySelector("#atlasSearch");
const searchPanel = document.querySelector("#searchPanel");
const searchResults = document.querySelector("#searchResults");
const searchQuestionMatches = document.querySelector("#searchQuestionMatches");
const questionPanel = document.querySelector("#questionPanel");
const questionBookmarks = document.querySelector("#questionBookmarks");
const bookDialog = document.querySelector("#bookDialog");
const satchel = document.querySelector("#satchel");
const pageScrim = document.querySelector("#pageScrim");
const firstVisitMist = document.querySelector("#firstVisitMist");
let activeTopic = null;
let activeBook = null;
let activeAge = "all";
let activePanelContext = null;
let currentMapScale = 1;
let savedBooks = loadSavedBooks();
let labelLayoutFrame = 0;
let hoveredRegion = null;
let regionPreviewTimer = 0;

if (document.documentElement.classList.contains("is-first-visit")) {
  window.setTimeout(() => {
    document.documentElement.classList.remove("is-first-visit");
    firstVisitMist?.remove();
  }, 3200);
} else {
  firstVisitMist?.remove();
}

function loadSavedBooks() {
  try {
    const saved = JSON.parse(localStorage.getItem("women-growth-satchel") || "[]");
    return new Set(saved.filter((bookId) => books.some((book) => book.id === bookId)));
  }
  catch (_) { return new Set(); }
}

function persistSavedBooks() {
  try { localStorage.setItem("women-growth-satchel", JSON.stringify([...savedBooks])); }
  catch (_) {}
}

function resetRegionPreview() {
  window.clearTimeout(regionPreviewTimer);
  hoveredRegion = null;
  document.querySelectorAll(".terrain").forEach((terrain) => {
    terrain.classList.remove("is-previewing", "is-preview-muted");
  });
}

function previewRegion(regionId) {
  window.clearTimeout(regionPreviewTimer);
  if (hoveredRegion === regionId) return;
  hoveredRegion = regionId;
  document.querySelectorAll(".terrain").forEach((terrain) => {
    terrain.classList.toggle("is-previewing", terrain.dataset.region === regionId);
    terrain.classList.toggle("is-preview-muted", terrain.dataset.region !== regionId);
  });
  updatePinVisibility();
}

function holdRegionPreview(regionId) {
  if (hoveredRegion === regionId) window.clearTimeout(regionPreviewTimer);
}

function clearRegionPreview(regionId, immediate = false) {
  window.clearTimeout(regionPreviewTimer);
  const clearPreview = () => {
    if (regionId && hoveredRegion !== regionId) return;
    resetRegionPreview();
    updatePinVisibility();
  };
  if (immediate) clearPreview();
  else regionPreviewTimer = window.setTimeout(clearPreview, 240);
}

function renderTerrains() {
  Object.entries(regions).forEach(([regionId, region]) => {
    const terrain = document.createElement("section");
    terrain.className = `terrain ${regionClass[regionId]}`;
    terrain.dataset.region = regionId;
    terrain.setAttribute("aria-label", `${region.title}地貌`);
    terrain.style.setProperty("--region-color", region.color);
    const heading = document.createElement("button");
    heading.type = "button";
    heading.className = "terrain-heading";
    heading.setAttribute("aria-label", `探索${region.title}`);
    const number = document.createElement("span");
    number.textContent = region.number;
    const title = document.createElement("strong");
    title.textContent = region.title;
    const en = document.createElement("small");
    en.textContent = region.en;
    heading.append(number, title, en);
    heading.addEventListener("pointerenter", () => previewRegion(regionId));
    heading.addEventListener("pointerleave", () => clearRegionPreview(regionId));
    heading.addEventListener("focus", () => previewRegion(regionId));
    heading.addEventListener("blur", () => clearRegionPreview(regionId));
    heading.addEventListener("click", () => openRegion(regionId));
    terrain.append(heading);

    topics.filter((topic) => topic.region === regionId).forEach((topic) => {
      const pin = document.createElement("button");
      pin.type = "button";
      pin.className = "topic-pin";
      pin.dataset.topic = topic.id;
      pin.dataset.route = topic.route;
      pin.title = topic.title;
      pin.setAttribute("aria-label", topic.title);
      pin.style.left = `${topic.x}%`;
      pin.style.top = `${topic.y}%`;
      const label = document.createElement("span");
      label.textContent = topic.mapLabel || topic.title;
      pin.append(label);
      pin.addEventListener("pointerenter", () => holdRegionPreview(regionId));
      pin.addEventListener("pointerleave", () => clearRegionPreview(regionId));
      pin.addEventListener("click", () => openTopic(topic.id));
      terrain.append(pin);
    });
    terrainLayer.append(terrain);
  });
}

function topicsForActiveAge(topicList) {
  if (activeAge === "all") return topicList;
  const relevant = new Set(ageTopicMap[activeAge] || []);
  return topicList.filter((topic) => relevant.has(topic.id));
}

function applyAgeFilter(age) {
  activeAge = ageTopicMap[age] ? age : "all";
  const relevant = new Set(ageTopicMap[activeAge] || []);
  const relevantRegions = new Set(topics.filter((topic) => relevant.has(topic.id)).map((topic) => topic.region));

  document.querySelectorAll("[data-age]").forEach((button) => {
    const selected = button.dataset.age === activeAge;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll(".topic-pin").forEach((pin) => {
    const isRelevant = activeAge !== "all" && relevant.has(pin.dataset.topic);
    pin.classList.toggle("is-age-relevant", isRelevant);
    pin.classList.toggle("is-age-muted", activeAge !== "all" && !isRelevant);
  });
  document.querySelectorAll(".terrain").forEach((terrain) => {
    const isRelevant = activeAge !== "all" && relevantRegions.has(terrain.dataset.region);
    terrain.classList.toggle("is-age-relevant", isRelevant);
    terrain.classList.toggle("is-age-muted", activeAge !== "all" && !isRelevant);
  });

  if (activeAge === "all") {
    delete document.documentElement.dataset.ageStage;
  } else {
    document.documentElement.dataset.ageStage = activeAge;
  }
  updatePinVisibility();
}

function updatePinVisibility() {
  const densityLevel = currentMapScale >= 1.58 ? 2 : currentMapScale >= 1.18 ? 1 : 0;
  const densityTopicIds = new Set();
  Object.keys(regions).forEach((regionId) => {
    const regionTopics = topics.filter((topic) => topic.region === regionId);
    const ageTopics = activeAge === "all"
      ? regionTopics
      : regionTopics.filter((topic) => ageTopicMap[activeAge]?.includes(topic.id));
    const visibleAtThisScale = densityLevel === 0 ? 2 : densityLevel === 1 ? 4 : ageTopics.length;
    ageTopics.slice(0, visibleAtThisScale).forEach((topic) => densityTopicIds.add(topic.id));
  });
  if (activeAge === "all" && densityLevel === 0) {
    densityTopicIds.clear();
    overviewTopicIds.forEach((topicId) => densityTopicIds.add(topicId));
  }

  document.querySelectorAll(".topic-pin").forEach((pin) => {
    const topic = topics.find((item) => item.id === pin.dataset.topic);
    let contextVisible = false;
    if (activePanelContext?.type === "region") contextVisible = topic.region === activePanelContext.id;
    if (activePanelContext?.type === "topic") contextVisible = topic.region === activePanelContext.region;
    if (activePanelContext?.type === "route") contextVisible = topic.route === activePanelContext.id;
    if (activePanelContext?.type === "question") contextVisible = activePanelContext.topicIds.includes(topic.id);
    const visible = hoveredRegion
      ? topic.region === hoveredRegion
      : densityLevel === 2 || contextVisible || densityTopicIds.has(topic.id) || pin.classList.contains("is-active");
    pin.classList.toggle("is-overview-hidden", !visible);
    pin.setAttribute("aria-hidden", String(!visible));
    pin.tabIndex = visible ? 0 : -1;
  });

  updateHeadingHiddenCounts();
  scheduleMapLabelLayout();

  const hint = document.querySelector("#mapGestureHint");
  if (hoveredRegion) {
    const routeCount = topics.filter((topic) => topic.region === hoveredRegion).length;
    hint.textContent = `${regions[hoveredRegion].title} · 已浮现 ${routeCount} 站路标 · 点击地貌查看书单`;
  }
  else if (densityLevel === 2) hint.textContent = "全部路标已展开 · 拖动地图继续探索";
  else if (densityLevel === 1) hint.textContent = "更多路标已出现 · 继续放大查看全部主题";
  else if (activeAge !== "all") hint.textContent = "已突出阶段路标 · 放大查看全部主题";
  else hint.textContent = "拖动地图 · 放大查看全部路标";
}

function updateHeadingHiddenCounts() {
  document.querySelectorAll(".terrain-heading").forEach((heading) => {
    const regionId = heading.closest(".terrain")?.dataset.region;
    const hiddenCount = topics.filter((topic) => {
      if (topic.region !== regionId) return false;
      const pin = document.querySelector(`.topic-pin[data-topic="${topic.id}"]`);
      return pin?.classList.contains("is-overview-hidden") || pin?.classList.contains("is-collision-hidden");
    }).length;
    heading.dataset.hiddenTopics = hiddenCount ? `＋${hiddenCount}` : "";
    heading.title = hiddenCount ? `点击查看${regions[regionId].title}，另有 ${hiddenCount} 个路标` : `探索${regions[regionId].title}`;
  });
}

function scheduleMapLabelLayout() {
  window.cancelAnimationFrame(labelLayoutFrame);
  labelLayoutFrame = window.requestAnimationFrame(resolveMapLabelCollisions);
}

function paddedRect(rect, padding = 5) {
  return {
    left: rect.left - padding,
    top: rect.top - padding,
    right: rect.right + padding,
    bottom: rect.bottom + padding,
    width: rect.width + padding * 2,
    height: rect.height + padding * 2
  };
}

function shiftedRect(rect, x, y) {
  return {
    ...rect,
    left: rect.left + x,
    right: rect.right + x,
    top: rect.top + y,
    bottom: rect.bottom + y
  };
}

function rectsOverlap(first, second) {
  return first.left < second.right && first.right > second.left && first.top < second.bottom && first.bottom > second.top;
}

function overlapArea(first, second) {
  const width = Math.max(0, Math.min(first.right, second.right) - Math.max(first.left, second.left));
  const height = Math.max(0, Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top));
  return width * height;
}

function resolveMapLabelCollisions() {
  const pins = [...document.querySelectorAll(".topic-pin:not(.is-overview-hidden)")];
  const headings = [...document.querySelectorAll(".terrain-heading")];
  const elements = [...headings, ...pins];
  const scale = Math.max(currentMapScale, 0.01);
  const stageRect = mapStage.getBoundingClientRect();
  const headingSafeArea = {
    left: stageRect.left + 18,
    top: stageRect.top + 82,
    right: stageRect.right - 20,
    bottom: stageRect.bottom - 86
  };
  const headingOffsets = [
    [0, 0], [0, -26], [0, 26], [-34, 0], [34, 0],
    [-34, -26], [34, -26], [-34, 26], [34, 26],
    [0, -52], [0, 52], [-68, 0], [68, 0],
    [-68, -26], [68, -26], [-68, 26], [68, 26]
  ];
  const pinOffsets = [
    [0, 0], [0, -24], [0, 24], [-34, 0], [34, 0],
    [-34, -24], [34, -24], [-34, 24], [34, 24],
    [0, -48], [0, 48], [-68, 0], [68, 0],
    [-68, -24], [68, -24], [-68, 24], [68, 24],
    [-34, -48], [34, -48], [-34, 48], [34, 48],
    [-92, 0], [92, 0], [-68, -48], [68, -48], [-68, 48], [68, 48]
  ];

  mapWorld.classList.add("is-arranging-labels");
  elements.forEach((element) => {
    element.style.setProperty("--label-shift-x", "0px");
    element.style.setProperty("--label-shift-y", "0px");
    element.classList.remove("is-collision-hidden");
  });
  void mapWorld.offsetWidth;

  const placed = [];
  const placeElement = (element, offsets, canHide, keepInsideStage = false) => {
    const baseRect = paddedRect(element.getBoundingClientRect());
    let best = null;
    offsets.forEach(([localX, localY]) => {
      let screenX = localX * scale;
      let screenY = localY * scale;
      let candidate = shiftedRect(baseRect, screenX, screenY);
      if (keepInsideStage) {
        if (candidate.left < headingSafeArea.left) screenX += headingSafeArea.left - candidate.left;
        else if (candidate.right > headingSafeArea.right) screenX -= candidate.right - headingSafeArea.right;
        if (candidate.top < headingSafeArea.top) screenY += headingSafeArea.top - candidate.top;
        else if (candidate.bottom > headingSafeArea.bottom) screenY -= candidate.bottom - headingSafeArea.bottom;
        candidate = shiftedRect(baseRect, screenX, screenY);
      }
      const score = placed.reduce((sum, rect) => sum + overlapArea(candidate, rect), 0);
      if (!best || score < best.score) best = { localX: screenX / scale, localY: screenY / scale, rect: candidate, score };
    });

    if (canHide && best.score > 0) {
      element.classList.add("is-collision-hidden");
      element.setAttribute("aria-hidden", "true");
      element.tabIndex = -1;
      return;
    }

    element.style.setProperty("--label-shift-x", `${best.localX}px`);
    element.style.setProperty("--label-shift-y", `${best.localY}px`);
    element.classList.remove("is-collision-hidden");
    if (element.classList.contains("topic-pin")) {
      element.setAttribute("aria-hidden", "false");
      element.tabIndex = 0;
    }
    placed.push(best.rect);
  };

  headings.forEach((heading) => placeElement(heading, headingOffsets, false, true));
  pins
    .sort((first, second) => {
      const priority = (pin) => pin.classList.contains("is-active") ? 0 : pin.classList.contains("is-age-relevant") ? 1 : overviewTopicIds.has(pin.dataset.topic) ? 2 : 3;
      return priority(first) - priority(second);
    })
    .forEach((pin) => placeElement(pin, pinOffsets, !hoveredRegion));

  updateHeadingHiddenCounts();
  const collisionHiddenCount = document.querySelectorAll(".topic-pin.is-collision-hidden").length;
  if (pinDensityLevel(currentMapScale) === 2 && collisionHiddenCount) {
    document.querySelector("#mapGestureHint").textContent = "已展开可读路标 · 点击地貌查看完整主题";
  }
  window.requestAnimationFrame(() => mapWorld.classList.remove("is-arranging-labels"));
}

function pinDensityLevel(scale) {
  if (scale >= 1.58) return 2;
  if (scale >= 1.18) return 1;
  return 0;
}

function updatePanelTriggerState() {
  document.querySelectorAll(".topic-pin").forEach((pin) => {
    pin.setAttribute("aria-expanded", String(activePanelContext?.type === "topic" && activePanelContext.id === pin.dataset.topic));
  });
  document.querySelectorAll(".terrain-heading").forEach((heading) => {
    const regionId = heading.closest(".terrain")?.dataset.region;
    heading.setAttribute("aria-expanded", String(activePanelContext?.type === "region" && activePanelContext.id === regionId));
  });
  document.querySelectorAll(".journey-stop").forEach((button) => {
    button.setAttribute("aria-pressed", String(activePanelContext?.type === "route" && activePanelContext.id === button.dataset.route));
  });
}

function booksForTopic(topicId) {
  const topic = topics.find((item) => item.id === topicId);
  if (topic?.bookIds) return topic.bookIds.map((bookId) => books.find((book) => book.id === bookId)).filter(Boolean);
  return books.filter((book) => book.topic === topicId);
}

function uniqueBooksForTopics(topicList) {
  const seen = new Set();
  return topicList.flatMap((topic) => booksForTopic(topic.id)).filter((book) => {
    if (seen.has(book.title)) return false;
    seen.add(book.title);
    return true;
  });
}

function booksForQuestion(question) {
  const questionTopics = question.topicIds.map((topicId) => topics.find((topic) => topic.id === topicId)).filter(Boolean);
  return uniqueBooksForTopics(questionTopics);
}

function createCover(book, className = "route-book__cover") {
  const cover = document.createElement("span");
  cover.className = className;
  cover.style.setProperty("--cover", coverColor(book));
  if (book.cover) {
    const image = document.createElement("img");
    image.src = book.cover;
    image.alt = "";
    image.loading = "lazy";
    image.referrerPolicy = "no-referrer";
    image.addEventListener("error", () => {
      cover.replaceChildren();
      const fallback = document.createElement("span");
      fallback.textContent = book.title;
      cover.append(fallback);
    });
    cover.append(image);
  } else {
    const fallback = document.createElement("span");
    fallback.textContent = book.title;
    cover.append(fallback);
  }
  return cover;
}

function coverColor(book) {
  const topic = topics.find((item) => item.id === book.topic);
  return regions[topic?.region]?.color || "#6f827d";
}

function createBookRow(book, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `route-book ${extraClass}`.trim();
  button.append(createCover(book));
  const copy = document.createElement("span");
  copy.className = "route-book__copy";
  const title = document.createElement("strong");
  title.textContent = book.title;
  const author = document.createElement("small");
  author.textContent = book.author || "作者资料待补充";
  copy.append(title, author);
  const arrow = document.createElement("em");
  arrow.textContent = "→";
  button.append(copy, arrow);
  button.addEventListener("click", () => openBook(book.id));
  return button;
}

function createBookmarkCard(book) {
  const topic = topics.find((item) => item.id === book.topic);
  const card = document.createElement("button");
  card.type = "button";
  card.className = "question-bookmark";
  card.append(createCover(book, "question-bookmark__cover"));

  const copy = document.createElement("span");
  copy.className = "question-bookmark__copy";
  const location = document.createElement("small");
  location.textContent = `${regions[topic.region].title} · ${topic.title}`;
  const title = document.createElement("strong");
  title.textContent = book.title;
  const author = document.createElement("em");
  author.textContent = book.author || "作者资料待补充";
  const why = document.createElement("span");
  why.textContent = book.questions?.[0] || book.why;
  copy.append(location, title, author, why);
  card.append(copy);
  card.addEventListener("click", () => openBook(book.id));
  return card;
}

function createDiscoveryLink(label, meta, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "discovery-link";
  const copy = document.createElement("span");
  const title = document.createElement("strong");
  title.textContent = label;
  const eyebrow = document.createElement("small");
  eyebrow.textContent = meta;
  copy.append(eyebrow, title);
  const arrow = document.createElement("i");
  arrow.textContent = "→";
  button.append(copy, arrow);
  button.addEventListener("click", handler);
  return button;
}

function renderFeaturedQuestions() {
  const container = document.querySelector("#featuredQuestions");
  const openingQuestions = featuredQuestionTexts.map((text) => questionCatalog.find((question) => question.text === text)).filter(Boolean);
  const openingQuestionIds = new Set(openingQuestions.map((question) => question.id));
  const rotationQuestions = [
    ...openingQuestions,
    ...questionCatalog.filter((question) => !openingQuestionIds.has(question.id))
  ];
  let cursor = 0;
  container.setAttribute("aria-live", "polite");

  const paint = () => {
    const visible = Array.from({ length: Math.min(6, rotationQuestions.length) }, (_, offset) => rotationQuestions[(cursor + offset) % rotationQuestions.length]);
    container.dataset.page = String(Math.floor(cursor / 6) + 1);
    container.replaceChildren(...visible.map((question) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = question.text;
      button.addEventListener("click", () => openQuestionSpecial(question.id));
      return button;
    }));
  };

  paint();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.setInterval(() => {
      if (container.matches(":hover") || container.contains(document.activeElement)) return;
      cursor = (cursor + 6) % rotationQuestions.length;
      paint();
    }, 5000);
  }
}

function openQuestionSpecial(questionId) {
  const question = questionCatalog.find((item) => item.id === questionId);
  if (!question) return;
  const region = regions[question.region];
  const questionTopics = question.topicIds.map((topicId) => topics.find((topic) => topic.id === topicId)).filter(Boolean);
  const questionBooks = booksForQuestion(question);

  activePanelContext = { type: "question", id: questionId, topicIds: question.topicIds };
  activeTopic = null;
  routePanel.hidden = true;
  closeSearch();
  delete document.documentElement.dataset.activeRoute;
  document.querySelectorAll(".journey-stop").forEach((button) => button.classList.remove("is-active"));
  document.querySelectorAll(".topic-pin").forEach((pin) => pin.classList.toggle("is-active", question.topicIds.includes(pin.dataset.topic)));
  document.querySelectorAll(".terrain").forEach((terrain) => {
    terrain.classList.toggle("is-active", terrain.dataset.region === question.region);
    terrain.classList.toggle("is-muted", terrain.dataset.region !== question.region);
  });
  document.querySelector("#questionPanelEyebrow").textContent = `${region.number} · ${region.title} · 问题特辑`;
  document.querySelector("#questionPanelTitle").textContent = question.text;
  document.querySelector("#questionPanelSummary").textContent = `${questionTopics.map((topic) => topic.title).join(" · ")}｜${questionBooks.length} 本成长路书`;
  questionBookmarks.replaceChildren(...questionBooks.map((book) => createBookmarkCard(book)));
  questionPanel.hidden = false;
  questionPanel.scrollTop = 0;
  updatePinVisibility();
  updatePanelTriggerState();
}

function closeQuestionSpecial() {
  questionPanel.hidden = true;
  if (activePanelContext?.type === "question") activePanelContext = null;
  document.querySelectorAll(".topic-pin, .terrain").forEach((element) => element.classList.remove("is-active", "is-muted"));
  updatePinVisibility();
  updatePanelTriggerState();
}

function openTopic(topicId) {
  const topic = topics.find((item) => item.id === topicId);
  if (!topic) return;
  if (!routePanel.hidden && activePanelContext?.type === "topic" && activePanelContext.id === topicId) {
    closeTopic();
    return;
  }
  questionPanel.hidden = true;
  closeSearch();
  resetRegionPreview();
  activePanelContext = { type: "topic", id: topicId, region: topic.region };
  activeTopic = topic;
  document.querySelectorAll(".topic-pin").forEach((pin) => pin.classList.toggle("is-active", pin.dataset.topic === topicId));
  document.querySelectorAll(".terrain").forEach((terrain) => {
    terrain.classList.toggle("is-active", terrain.dataset.region === topic.region);
    terrain.classList.toggle("is-muted", terrain.dataset.region !== topic.region);
  });
  document.documentElement.dataset.activeRoute = topic.route;
  document.querySelectorAll(".journey-stop").forEach((button) => button.classList.toggle("is-active", button.dataset.route === topic.route));
  document.querySelector("#panelEyebrow").textContent = `${regions[topic.region].title} · ${routes[topic.route].title} · ${topic.article}`;
  document.querySelector("#panelTitle").textContent = topic.title;
  document.querySelector("#panelQuestion").textContent = topic.question;
  document.querySelector("#panelNote").textContent = topic.note;
  panelBooks.replaceChildren(...booksForTopic(topicId).map((book) => createBookRow(book)));
  routePanel.hidden = false;
  routePanel.scrollTop = 0;
  updatePinVisibility();
  updatePanelTriggerState();
}

function openRegion(regionId) {
  const region = regions[regionId];
  if (!region) return;
  if (!routePanel.hidden && activePanelContext?.type === "region" && activePanelContext.id === regionId) {
    closeTopic();
    return;
  }
  questionPanel.hidden = true;
  closeSearch();
  resetRegionPreview();
  activePanelContext = { type: "region", id: regionId };
  activeTopic = null;
  const regionTopics = topicsForActiveAge(topics.filter((topic) => topic.region === regionId));
  document.querySelectorAll(".topic-pin").forEach((pin) => pin.classList.remove("is-active"));
  document.querySelectorAll(".terrain").forEach((terrain) => {
    terrain.classList.toggle("is-active", terrain.dataset.region === regionId);
    terrain.classList.toggle("is-muted", terrain.dataset.region !== regionId);
  });
  document.querySelectorAll(".journey-stop").forEach((button) => button.classList.remove("is-active"));
  delete document.documentElement.dataset.activeRoute;
  document.querySelector("#panelEyebrow").textContent = `${region.number} · ${region.en} · ${regionTopics.length} 个路标`;
  document.querySelector("#panelTitle").textContent = region.title;
  document.querySelector("#panelQuestion").textContent = region.question;
  document.querySelector("#panelNote").textContent = region.note;
  panelBooks.replaceChildren(...uniqueBooksForTopics(regionTopics).map((book) => createBookRow(book)));
  routePanel.hidden = false;
  routePanel.scrollTop = 0;
  updatePinVisibility();
  updatePanelTriggerState();
}

function openRoute(routeId) {
  const route = routes[routeId];
  if (!route) return;
  if (!routePanel.hidden && activePanelContext?.type === "route" && activePanelContext.id === routeId) {
    closeTopic();
    return;
  }
  questionPanel.hidden = true;
  closeSearch();
  activePanelContext = { type: "route", id: routeId };
  activeTopic = null;
  const routeTopics = topicsForActiveAge(topics.filter((topic) => topic.route === routeId));
  const activeRegions = new Set(routeTopics.map((topic) => topic.region));
  document.documentElement.dataset.activeRoute = routeId;
  document.querySelectorAll(".topic-pin").forEach((pin) => pin.classList.toggle("is-active", pin.dataset.route === routeId));
  document.querySelectorAll(".terrain").forEach((terrain) => {
    terrain.classList.toggle("is-active", activeRegions.has(terrain.dataset.region));
    terrain.classList.toggle("is-muted", !activeRegions.has(terrain.dataset.region));
  });
  document.querySelectorAll(".journey-stop").forEach((button) => button.classList.toggle("is-active", button.dataset.route === routeId));
  document.querySelector("#panelEyebrow").textContent = `${route.number} · 跨越 ${activeRegions.size} 片地貌 · ${routeTopics.length} 个路标`;
  document.querySelector("#panelTitle").textContent = route.title;
  document.querySelector("#panelQuestion").textContent = route.question;
  document.querySelector("#panelNote").textContent = route.subtitle;
  panelBooks.replaceChildren(...uniqueBooksForTopics(routeTopics).map((book) => createBookRow(book)));
  routePanel.hidden = false;
  routePanel.scrollTop = 0;
  updatePinVisibility();
  updatePanelTriggerState();
}

function closeTopic() {
  activeTopic = null;
  if (activePanelContext?.type !== "question") activePanelContext = null;
  routePanel.hidden = true;
  delete document.documentElement.dataset.activeRoute;
  document.querySelectorAll(".topic-pin, .terrain").forEach((element) => element.classList.remove("is-active", "is-muted"));
  document.querySelectorAll(".journey-stop").forEach((button) => button.classList.remove("is-active"));
  updatePinVisibility();
  updatePanelTriggerState();
}

function openBook(bookId) {
  const book = books.find((item) => item.id === bookId);
  if (!book) return;
  activeBook = book;
  const topic = activeTopic && booksForTopic(activeTopic.id).some((item) => item.id === book.id)
    ? activeTopic
    : topics.find((item) => item.id === book.topic);
  document.querySelector("#ticketCover").replaceChildren(...createCover(book).childNodes);
  document.querySelector("#ticketCover").style.setProperty("--cover", coverColor(book));
  document.querySelector("#ticketLocation").textContent = `${regions[topic.region].title} · ${routes[topic.route].title} · ${topic.title}`;
  document.querySelector("#ticketTitle").textContent = book.title;
  const ticketAuthor = document.querySelector("#ticketAuthor");
  ticketAuthor.textContent = book.author || "作者资料待补充";
  ticketAuthor.hidden = false;
  const ticketWhy = document.querySelector("#ticketWhy");
  const questions = book.questions?.length ? book.questions : [book.prompt, book.why].filter(Boolean).slice(0, 2);
  ticketWhy.replaceChildren(...questions.map((question, index) => {
    const paragraph = document.createElement("p");
    const number = document.createElement("span");
    number.textContent = `0${index + 1}`;
    const copy = document.createElement("strong");
    copy.textContent = question;
    paragraph.append(number, copy);
    return paragraph;
  }));
  document.querySelector("#ticketPrompt").textContent = "不必急着得到答案。先留意书里的经验，与你自己的生活在哪里相遇。";
  const link = document.querySelector("#ticketLink");
  link.hidden = !book.link;
  if (book.link) link.href = book.link;
  updateSaveButton();
  bookDialog.showModal();
}

function updateSaveButton() {
  const button = document.querySelector("#saveBook");
  if (!activeBook) return;
  const saved = savedBooks.has(activeBook.id);
  button.textContent = saved ? "已在行囊 · 移出" : "放进行囊";
  button.setAttribute("aria-pressed", String(saved));
}

function toggleSave() {
  if (!activeBook) return;
  if (savedBooks.has(activeBook.id)) savedBooks.delete(activeBook.id);
  else savedBooks.add(activeBook.id);
  persistSavedBooks();
  updateSaveButton();
  renderSatchel();
}

function renderSatchel() {
  document.querySelector("#savedCount").textContent = savedBooks.size;
  const saved = books.filter((book) => savedBooks.has(book.id));
  document.querySelector("#satchelMeta").textContent = `${saved.length} 本成长路书`;
  document.querySelector("#satchelEmpty").hidden = saved.length > 0;
  const shelf = document.querySelector("#satchelShelf");
  shelf.hidden = saved.length === 0;
  shelf.replaceChildren(...saved.map((book) => {
    const topic = topics.find((item) => item.id === book.topic);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "satchel__book";
    button.title = book.title;
    button.setAttribute("aria-label", `打开《${book.title}》书票`);
    button.append(createCover(book, "satchel__book-cover"));
    const copy = document.createElement("span");
    copy.className = "satchel__book-copy";
    const location = document.createElement("small");
    location.textContent = topic ? `${regions[topic.region].title} · ${topic.title}` : "成长路书";
    const title = document.createElement("strong");
    title.textContent = book.title;
    const author = document.createElement("em");
    author.textContent = book.author || "作者资料待补充";
    copy.append(location, title, author);
    const arrow = document.createElement("i");
    arrow.textContent = "→";
    button.append(copy, arrow);
    button.addEventListener("click", () => openBook(book.id));
    return button;
  }));
}

function openSatchel() {
  renderSatchel();
  satchel.hidden = false;
  pageScrim.hidden = false;
  document.querySelector("#satchelButton").setAttribute("aria-expanded", "true");
}

function closeSatchel() {
  satchel.hidden = true;
  pageScrim.hidden = true;
  document.querySelector("#satchelButton").setAttribute("aria-expanded", "false");
}

function runSearch(rawValue) {
  const query = rawValue.trim().toLowerCase();
  if (!query) { closeSearch(); return; }
  closeTopic();
  const words = query.split(/\s+/).filter(Boolean);
  const matches = (values) => words.some((word) => values.join(" ").toLowerCase().includes(word));
  const matchingRegions = Object.entries(regions).filter(([, region]) => matches([region.title, region.en, region.question, region.note]));
  const matchingTopics = topics.filter((topic) => {
    const region = regions[topic.region];
    const route = routes[topic.route];
    return matches([topic.title, topic.article, topic.question, topic.note, region.title, route.title, route.subtitle]);
  });
  const matchingQuestions = questionCatalog.filter((question) => {
    const region = regions[question.region];
    const relatedTopics = question.topicIds.map((topicId) => topics.find((topic) => topic.id === topicId)?.title || "");
    return matches([question.text, region.title, ...relatedTopics]);
  });
  const relatedTopicIds = new Set([
    ...matchingTopics.map((topic) => topic.id),
    ...matchingQuestions.flatMap((question) => question.topicIds),
    ...matchingRegions.flatMap(([regionId]) => topics.filter((topic) => topic.region === regionId).map((topic) => topic.id))
  ]);
  const seenTitles = new Set();
  const results = books.filter((book) => {
    const topic = topics.find((item) => item.id === book.topic);
    const route = routes[topic.route];
    const region = regions[topic.region];
    const haystack = [book.title, book.author, book.why, book.prompt, topic.title, topic.article, topic.question, topic.note, route.title, route.subtitle, region.title, region.en, region.question].join(" ").toLowerCase();
    const isMatch = relatedTopicIds.has(book.topic) || words.some((word) => haystack.includes(word));
    if (!isMatch || seenTitles.has(book.title)) return false;
    seenTitles.add(book.title);
    return true;
  });
  const discoveryLinks = [
    ...matchingQuestions.map((question) => createDiscoveryLink(question.text, `${regions[question.region].title} · 问题特辑`, () => openQuestionSpecial(question.id))),
    ...matchingTopics.map((topic) => createDiscoveryLink(topic.title, `${regions[topic.region].title} · 成长主题`, () => openTopic(topic.id))),
    ...matchingRegions.map(([regionId, region]) => createDiscoveryLink(region.title, "人生母题", () => openRegion(regionId)))
  ].slice(0, 18);
  searchQuestionMatches.replaceChildren(...discoveryLinks);
  searchQuestionMatches.hidden = discoveryLinks.length === 0;
  document.querySelector("#searchTitle").textContent = rawValue.trim();
  document.querySelector("#searchStats").textContent = `${discoveryLinks.length} 个入口 · ${results.length} 本书`;
  searchResults.replaceChildren(...(results.length ? results.map((book) => createBookRow(book, "search-book")) : [emptyResult()]));
  searchPanel.hidden = false;
  searchPanel.scrollTop = 0;
  routePanel.hidden = true;
  questionPanel.hidden = true;
}

function emptyResult() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "地图上暂时没有完全对应的书票。换一个更短的主题词试试，例如“自由”“照护”或“工作”。";
  paragraph.style.cssText = "grid-column:1/-1;color:#697b75;line-height:1.8";
  return paragraph;
}

function closeSearch() {
  searchPanel.hidden = true;
  searchInput.value = "";
  document.querySelector("#clearSearch").hidden = true;
}

renderTerrains();
applyAgeFilter("all");
renderSatchel();
renderFeaturedQuestions();
hydrateBookMetadata();

document.querySelector("#panelClose").addEventListener("click", closeTopic);
document.querySelector("#searchPanelClose").addEventListener("click", closeSearch);
document.querySelector("#questionPanelClose").addEventListener("click", closeQuestionSpecial);
document.querySelector("#satchelButton").addEventListener("click", openSatchel);
document.querySelector("#satchelClose").addEventListener("click", closeSatchel);
document.querySelector("#satchelExplore").addEventListener("click", closeSatchel);
pageScrim.addEventListener("click", closeSatchel);
document.querySelector("#saveBook").addEventListener("click", toggleSave);
bookDialog.addEventListener("click", (event) => {
  if (event.target === bookDialog) bookDialog.close();
});

document.querySelectorAll(".journey-stop").forEach((button) => {
  button.addEventListener("click", () => openRoute(button.dataset.route));
});

document.querySelector("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(searchInput.value);
});

searchInput.addEventListener("input", () => {
  document.querySelector("#clearSearch").hidden = !searchInput.value;
});

document.querySelector("#clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  document.querySelector("#clearSearch").hidden = true;
  closeSearch();
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    document.querySelector("#clearSearch").hidden = false;
    runSearch(button.dataset.query);
  });
});

document.querySelectorAll("[data-age]").forEach((button) => {
  button.addEventListener("click", () => {
    closeTopic();
    closeQuestionSpecial();
    closeSearch();
    applyAgeFilter(button.dataset.age);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!satchel.hidden) closeSatchel();
  else if (!questionPanel.hidden) closeQuestionSpecial();
  else if (!searchPanel.hidden) closeSearch();
  else if (!routePanel.hidden) closeTopic();
});

const mapStage = document.querySelector(".map-stage");
const mapWorld = document.querySelector(".map-world");
const mapZoomLevel = document.querySelector("#mapZoomLevel");
const mapState = { x: 0, y: 0, scale: 1 };
const mapPointers = new Map();
let dragStart = null;
let pinchStart = null;
let mapGestureMoved = false;
let suppressNextMapClick = false;

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function clampMapPosition() {
  const stageWidth = mapStage.clientWidth;
  const stageHeight = mapStage.clientHeight;
  const worldWidth = mapWorld.offsetWidth * mapState.scale;
  const worldHeight = mapWorld.offsetHeight * mapState.scale;
  const maxX = Math.max(stageWidth * 0.1, (worldWidth - stageWidth) / 2 + stageWidth * 0.08);
  const maxY = Math.max(stageHeight * 0.12, (worldHeight - stageHeight) / 2 + stageHeight * 0.08);
  mapState.x = clamp(mapState.x, -maxX, maxX);
  mapState.y = clamp(mapState.y, -maxY, maxY);
}

function renderMapTransform() {
  const previousDensityLevel = pinDensityLevel(currentMapScale);
  clampMapPosition();
  mapWorld.style.setProperty("--map-x", `${mapState.x}px`);
  mapWorld.style.setProperty("--map-y", `${mapState.y}px`);
  mapWorld.style.setProperty("--map-zoom", mapState.scale.toFixed(3));
  mapZoomLevel.textContent = `${Math.round(mapState.scale * 100)}%`;
  currentMapScale = mapState.scale;
  if (previousDensityLevel !== pinDensityLevel(currentMapScale)) updatePinVisibility();
}

function zoomMap(nextScale, clientX, clientY) {
  const previousScale = mapState.scale;
  const scale = clamp(nextScale, 0.78, 2.6);
  if (Math.abs(scale - previousScale) < 0.001) return;
  const bounds = mapStage.getBoundingClientRect();
  const focusX = (clientX ?? bounds.left + bounds.width / 2) - (bounds.left + bounds.width / 2);
  const focusY = (clientY ?? bounds.top + bounds.height / 2) - (bounds.top + bounds.height / 2);
  const ratio = scale / previousScale;
  mapState.x = focusX - (focusX - mapState.x) * ratio;
  mapState.y = focusY - (focusY - mapState.y) * ratio;
  mapState.scale = scale;
  renderMapTransform();
}

function resetMap() {
  mapState.x = 0;
  mapState.y = 0;
  mapState.scale = 1;
  renderMapTransform();
}

function pointerDistance(points) {
  return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
}

function pointerMidpoint(points) {
  return { x: (points[0].x + points[1].x) / 2, y: (points[0].y + points[1].y) / 2 };
}

mapStage.addEventListener("wheel", (event) => {
  event.preventDefault();
  zoomMap(mapState.scale * Math.exp(-event.deltaY * 0.0012), event.clientX, event.clientY);
}, { passive: false });

mapStage.addEventListener("dblclick", (event) => {
  if (event.target.closest("button, a, input")) return;
  zoomMap(mapState.scale + 0.28, event.clientX, event.clientY);
});

mapStage.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  if (event.target.closest("button, a, input")) return;
  mapPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  mapStage.setPointerCapture(event.pointerId);
  mapStage.classList.add("is-dragging");
  if (mapPointers.size === 1) {
    mapGestureMoved = false;
    dragStart = { pointerX: event.clientX, pointerY: event.clientY, mapX: mapState.x, mapY: mapState.y };
  } else if (mapPointers.size === 2) {
    mapGestureMoved = true;
    const points = [...mapPointers.values()];
    pinchStart = {
      distance: pointerDistance(points),
      midpoint: pointerMidpoint(points),
      scale: mapState.scale,
      mapX: mapState.x,
      mapY: mapState.y
    };
  }
});

mapStage.addEventListener("pointermove", (event) => {
  if (!mapPointers.has(event.pointerId)) return;
  mapPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
  if (mapPointers.size === 1 && dragStart) {
    if (Math.hypot(event.clientX - dragStart.pointerX, event.clientY - dragStart.pointerY) > 5) mapGestureMoved = true;
    mapState.x = dragStart.mapX + event.clientX - dragStart.pointerX;
    mapState.y = dragStart.mapY + event.clientY - dragStart.pointerY;
    renderMapTransform();
  } else if (mapPointers.size === 2 && pinchStart) {
    mapGestureMoved = true;
    const points = [...mapPointers.values()];
    const midpoint = pointerMidpoint(points);
    mapState.x = pinchStart.mapX + midpoint.x - pinchStart.midpoint.x;
    mapState.y = pinchStart.mapY + midpoint.y - pinchStart.midpoint.y;
    mapState.scale = clamp(pinchStart.scale * pointerDistance(points) / pinchStart.distance, 0.78, 2.6);
    renderMapTransform();
  }
});

function releaseMapPointer(event) {
  mapPointers.delete(event.pointerId);
  if (mapPointers.size === 1) {
    const remaining = [...mapPointers.values()][0];
    dragStart = { pointerX: remaining.x, pointerY: remaining.y, mapX: mapState.x, mapY: mapState.y };
    pinchStart = null;
  } else if (mapPointers.size === 0) {
    suppressNextMapClick = mapGestureMoved;
    dragStart = null;
    pinchStart = null;
    mapStage.classList.remove("is-dragging");
  }
}

mapStage.addEventListener("pointerup", releaseMapPointer);
mapStage.addEventListener("pointercancel", releaseMapPointer);

mapStage.addEventListener("click", (event) => {
  if (event.target.closest("button, a, input, .map-controls")) return;
  if (suppressNextMapClick) {
    suppressNextMapClick = false;
    return;
  }
  if (!routePanel.hidden) closeTopic();
  if (!searchPanel.hidden) closeSearch();
});

document.querySelector(".atlas-intro").addEventListener("click", (event) => {
  if (event.target.closest("button, a, input, form")) return;
  if (!routePanel.hidden) closeTopic();
  if (!searchPanel.hidden) closeSearch();
});

function bindHeldZoom(button, direction) {
  let delayTimer;
  let repeatTimer;
  let suppressClick = false;
  const applyZoom = () => zoomMap(mapState.scale + direction * 0.12);
  button.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    delayTimer = window.setTimeout(() => {
      suppressClick = true;
      applyZoom();
      repeatTimer = window.setInterval(applyZoom, 110);
    }, 420);
  });
  const stopZoom = () => {
    window.clearTimeout(delayTimer);
    window.clearInterval(repeatTimer);
  };
  button.addEventListener("pointerup", stopZoom);
  button.addEventListener("pointercancel", stopZoom);
  button.addEventListener("pointerleave", stopZoom);
  button.addEventListener("click", () => {
    if (suppressClick) {
      suppressClick = false;
      return;
    }
    applyZoom();
  });
}

bindHeldZoom(document.querySelector("#mapZoomOut"), -1);
bindHeldZoom(document.querySelector("#mapZoomIn"), 1);
document.querySelector("#mapReset").addEventListener("click", resetMap);
window.addEventListener("resize", () => {
  renderMapTransform();
  scheduleMapLabelLayout();
});
renderMapTransform();
