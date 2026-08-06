const MENU = [
  { id: 'guandan', name: '掼蛋对抗赛', category: '一起玩', icon: '🃏', tagline: '两副牌，四个人，一场默契与算计的较量。', people: '4人', time: '45–90分钟', type: '搭档出牌', difficulty: '中等', mood: 'lively', prep: '两副扑克牌', how: '四人分成两队，按照大家熟悉的掼蛋规则进行。可以约定打满一轮，或者设定一个结束时间。', special: true },
  { id: 'uno', name: 'UNO友情局', category: '一起玩', icon: '🌈', tagline: '规则简单，友情可能没有那么简单。', people: '2–6人', time: '20–40分钟', type: '数字卡牌、聚会游戏', difficulty: '简单', mood: 'lively', prep: 'UNO卡牌', how: '按标准规则进行，先完成两局或三局。打出倒数第二张牌时，别忘了喊UNO。', special: true },
  { id: 'werewolf', name: '狼人杀', category: '一起玩', icon: '🐺', tagline: '天黑请闭眼，熟人局请谨慎发言。', people: '6人推荐', time: '45–90分钟', type: '身份推理、阵营游戏', difficulty: '中等', mood: 'lively', prep: '身份牌或狼人杀应用', how: '六人时使用简化角色配置：狼人、预言家、女巫和平民。人数不足六人时不建议开局。', special: true },
  { id: 'manila', name: '马尼拉', category: '一起玩', icon: '🚢', tagline: '货船还没靠岸，大家已经开始押注命运。', people: '3–5人', time: '约60分钟', type: '模拟经营、投资竞标', difficulty: '中等', mood: 'lively', prep: '《马尼拉》桌游', how: '通过投资货物、安排船只和竞标职位参与一轮轮航运。根据游戏规则结算收益，最终资产最多的人获胜。', special: true },
  { id: 'modern-art', name: '现代艺术', category: '一起玩', icon: '🖼️', tagline: '欢迎来到拍卖场，艺术价值由在座各位决定。', people: '3–5人', time: '约60–90分钟', type: '拍卖、模拟经营', difficulty: '中等', mood: 'lively', prep: '《现代艺术》桌游', how: '轮流扮演拍卖师，以不同方式出售艺术品；每轮根据市场热度结算，最终现金最多的人获胜。', special: true },
  { id: 'gem-collection', name: '典藏宝石', category: '一起玩', icon: '💎', tagline: '从一枚宝石开始，悄悄建立自己的收藏帝国。', people: '2–4人', time: '约30分钟', type: '资源收集、经营策略', difficulty: '简单', mood: 'relaxed', prep: '《典藏宝石》桌游', how: '收集不同颜色的宝石资源，购买卡牌并累积声望。率先达到目标分数的人获胜。', special: true },
  { id: 'decrypto', name: '截码战', category: '一起玩', icon: '🔐', tagline: '既要让队友听懂，也不能让对面看穿。', people: '3–8人', time: '约30分钟', type: '团队猜词、推理解码', difficulty: '中等', mood: 'lively', prep: '《截码战》桌游', how: '分队后根据己方关键词设计线索，让队友破解密码，同时尝试截获对手的编码规律。', special: true },
  { id: 'criminal-dance', name: '犯人在跳舞', category: '一起玩', icon: '💃', tagline: '犯人一直在换手，侦探最好别太早下结论。', people: '3–8人', time: '约10–15分钟', type: '卡牌推理、聚会游戏', difficulty: '简单', mood: 'lively', prep: '《犯人在跳舞》卡牌', how: '依次打出手牌并执行角色效果，追踪犯人牌的去向。侦探需要在合适的时机指出犯人持有者。', special: true },
  { id: 'scout', name: '搜索（SCOUT）', category: '一起玩', icon: '🎪', tagline: '手牌不能换顺序，只能想办法让它越来越漂亮。', people: '2–5人', time: '约15–20分钟', type: '组合出牌、卡牌游戏', difficulty: '简单', mood: 'lively', prep: '《SCOUT》卡牌', how: '拿到手牌后不能调整顺序，通过出牌或招募桌面卡牌组成更强组合，分轮累计得分。', special: true },
  { id: 'take-6', name: '谁是牛头王', category: '一起玩', icon: '🐮', tagline: '数字排得好好的，直到有人被迫收走一整排牛头。', people: '2–10人', time: '约30分钟', type: '数字卡牌、聚会游戏', difficulty: '简单', mood: 'lively', prep: '《谁是牛头王》卡牌', how: '每轮同时选择一张数字牌，再按从小到大放入牌列。放到第六张的人收走整列并承担牛头罚分。', special: true },
  { id: 'cabo', name: 'CABO', category: '一起玩', icon: '🌙', tagline: '记住自己的牌，也别太相信刚才的记忆。', people: '2–4人', time: '约30–45分钟', type: '记忆换牌、卡牌游戏', difficulty: '简单', mood: 'relaxed', prep: '《CABO》卡牌', how: '查看并记忆有限的手牌，通过抽牌和特殊能力交换、窥视或干扰。认为自己点数最低时可以呼叫CABO。', special: true },

  { id: 'mario-odyssey', name: '超级马力欧 奥德赛', category: '一起玩', icon: '🍄', tagline: '今天先不拯救整个世界，去一个新王国逛逛就好。', people: '1–2人', time: '主线约12–15小时', type: '3D冒险、动作闯关', difficulty: '简单', mood: 'lively', prep: 'Switch、游戏和手柄', how: '选择一个还没探索充分的王国继续冒险。双人时一人操作马力欧，一人操作凯皮，也可以轮流挑战月亮。', special: true, officialLink: 'https://www.nintendo.com/us/store/products/super-mario-odyssey-switch/' },
  { id: 'one-two-switch', name: '1-2-Switch', category: '一起玩', icon: '🤠', tagline: '不要盯着屏幕，看着对手的眼睛决胜负。', people: '2人', time: '每局约1–5分钟', type: '体感、双人聚会', difficulty: '入门', mood: 'lively', prep: 'Switch、游戏和两个Joy-Con', how: '随机挑选几个面对面的体感小游戏，两人轮流对战。其他人可以观战、计分并挑战胜者。', special: true, officialLink: 'https://www.nintendo.com/us/store/products/1-2-switch-switch/' },
  { id: 'stardew-valley', name: '星露谷物语', category: '一起玩', icon: '🌾', tagline: '先离开城市一会儿，去像素农场过一天。', people: '1人；联网1–4人', time: '无固定时长，通常50小时以上', type: '农场经营、生活模拟', difficulty: '简单', mood: 'relaxed', prep: 'Switch、游戏；多人需要联网设备', how: '继续经营已有农场，或者共同规划一个新的像素农场。聚会时可以约定只体验一个游戏日。', special: true, officialLink: 'https://www.nintendo.com/store/products/stardew-valley-switch/' },
  { id: 'kirby-forgotten-land', name: '星之卡比：探索发现', category: '一起玩', icon: '🌟', tagline: '粉色英雄出发，今天允许把路上的东西都吸进去。', people: '1–2人', time: '主线约10–12小时', type: '3D动作、合作闯关', difficulty: '入门', mood: 'lively', prep: 'Switch、游戏和手柄', how: '选择一个关卡合作闯关，一人操作卡比，一人操作头巾瓦豆鲁迪；也可以轮流挑战隐藏任务。', special: true, officialLink: 'https://www.nintendo.com/us/store/products/kirby-and-the-forgotten-land-114404/' },
  { id: 'zelda-botw', name: '塞尔达传说：旷野之息', category: '一起玩', icon: '🗡️', tagline: '海拉鲁很大，这次只需要决定往哪个方向走。', people: '1人', time: '主线约50小时，完整探索100小时以上', type: '开放世界、动作冒险', difficulty: '中等', mood: 'relaxed', prep: 'Switch和游戏', how: '由大家共同决定目的地，一人操作，遇到神庙、战斗或解谜时可以轮换。适合作为共同观看的冒险。', special: true, officialLink: 'https://www.nintendo.com/us/store/products/the-legend-of-zelda-breath-of-the-wild-switch/' },
  { id: 'luigis-mansion-3', name: '路易吉洋馆3', category: '一起玩', icon: '👻', tagline: '这家酒店有点闹鬼，但两个人进去就没那么可怕。', people: '剧情1–2人；小游戏最多8人', time: '主线约12–15小时', type: '解谜冒险、合作闯关', difficulty: '简单', mood: 'lively', prep: 'Switch、游戏和手柄', how: '剧情模式可两人合作探索楼层；人数更多时可以进入小游戏模式，轮换进行短局对战。', special: true, officialLink: 'https://www.nintendo.com/us/store/products/luigis-mansion-3-switch/' },
  { id: 'animal-crossing', name: '集合啦！动物森友会', category: '一起玩', icon: '🏝️', tagline: '欢迎登岛，把今天寄放在另一种生活里。', people: '单机1–4人；联网最多8人', time: '无固定时长', type: '岛屿经营、生活模拟', difficulty: '入门', mood: 'relaxed', prep: 'Switch和游戏；联网游玩需要多台设备', how: '一起逛岛、布置空间、钓鱼或参观朋友的岛。聚会时可以设定一个小目标，例如完成一张岛屿合照。', special: true, officialLink: 'https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/' },

  { id: 'movie', name: '沙发电影时间', category: '一起看听', icon: '🎬', tagline: '选一部片子，把接下来的时间交给沙发。', people: '2–6人', time: '90–120分钟', type: '电影', difficulty: '放空即可', mood: 'relaxed', prep: '电视、投影或电脑，以及可用片源', how: '从今日片单中随机抽取一部电影。开始前准备好饮料和零食，中途尽量不再纠结换片。', special: true },
  { id: 'funny-variety', name: '搞笑综艺', category: '一起看听', icon: '🤣', tagline: '今天不研究人生，只负责笑出声音。', people: '2–6人', time: '30–90分钟', type: '综艺、喜剧', difficulty: '放空即可', mood: 'lively', prep: '电视或投影，以及一集备选节目', how: '从收藏的搞笑综艺里挑一集或几个经典片段。谁先笑出声，谁负责拿下一轮零食。', special: true },
  { id: 'friends', name: '老友记', category: '一起看听', icon: '☕', tagline: '去中央公园咖啡馆，和六位老朋友坐一会儿。', people: '2–6人', time: '25–50分钟', type: '情景喜剧', difficulty: '放空即可', mood: 'relaxed', prep: '电视或投影，以及可用片源', how: '随机选择一到两集《老友记》，或者每个人提名一集最喜欢的故事后投票决定。', special: true },
  { id: 'cyber-exhibition', name: '赛博看展', category: '一起看听', icon: '🖼️', tagline: '不用出门，也可以在展厅里慢慢走一圈。', people: '2–6人', time: '30–60分钟', type: '线上展览、艺术', difficulty: '轻松', mood: 'relaxed', prep: '电脑或电视，以及线上展览页面', how: '打开一场线上展览或博物馆数字展厅，轮流决定下一件作品，并分享最想带回家的一件。', special: true },
  { id: 'luyu-talk', name: '鲁豫漫谈', category: '一起看听', icon: '🎙️', tagline: '坐下来，听一场足够长、也足够松弛的谈话。', people: '2–6人', time: '45–90分钟', type: '访谈、漫谈', difficulty: '轻松', mood: 'relaxed', prep: '电视或投影，以及一期备选节目', how: '选择一期感兴趣的鲁豫访谈或漫谈节目。看完以后，每个人说一个最有共鸣或最想反驳的观点。', special: true },
  { id: 'cyber-concert', name: '赛博演唱会', category: '一起看听', icon: '🎤', tagline: '客厅灯光调暗，这里临时变成第一排。', people: '2–6人', time: '60–120分钟', type: '演唱会、音乐现场', difficulty: '放空即可', mood: 'lively', prep: '电视或投影、音箱和演唱会片源', how: '选择一场完整演唱会或现场合集，调好灯光和音量。允许跟唱，也允许安静地坐完整场。', special: true },
  { id: 'playlist-cute-songs', name: '播放歌单：很可爱很可爱的歌', category: '一起看听', icon: '🎀', tagline: '让轻快旋律在房间里蹦蹦跳跳一会儿。', people: '2–6人', time: '30–90分钟', type: '可爱流行、轻快歌单', difficulty: '打开即听', mood: 'lively', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「很可爱很可爱的歌」。音量以不影响聊天为准，听到喜欢的歌可以随时收藏。', special: true },
  { id: 'playlist-smooth-jazz', name: '播放歌单：smooth jazz', category: '一起看听', icon: '🎷', tagline: '让爵士乐替客厅铺上一层柔软的光。', people: '2–6人', time: '30–90分钟', type: 'Smooth Jazz、氛围音乐', difficulty: '打开即听', mood: 'relaxed', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「smooth jazz」。适合吃饭、喝点东西或慢慢聊天时作为背景音乐。', special: true },
  { id: 'playlist-vintage-gramophone', name: '播放歌单：复古留声机', category: '一起看听', icon: '📻', tagline: '把时间轻轻拨回唱针落下的旧日客厅。', people: '2–6人', time: '30–90分钟', type: '复古金曲、怀旧歌单', difficulty: '打开即听', mood: 'relaxed', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「复古留声机」。可以调低灯光，让歌单成为今天小聚的复古背景。', special: true },
  { id: 'playlist-vaporwave', name: '播放歌单：蒸汽波', category: '一起看听', icon: '🌆', tagline: '霓虹、旧梦和一点互联网年代的失真浪漫。', people: '2–6人', time: '30–90分钟', type: '蒸汽波、电子氛围', difficulty: '打开即听', mood: 'relaxed', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「蒸汽波」。适合放空、看窗外，或者让聊天暂时拥有一层赛博滤镜。', special: true },
  { id: 'playlist-early-summer-ukulele', name: '播放歌单：初夏与尤克里里', category: '一起看听', icon: '🪕', tagline: '像初夏刚打开窗，风里带着一点木头香。', people: '2–6人', time: '30–90分钟', type: '尤克里里、清新民谣', difficulty: '打开即听', mood: 'relaxed', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「初夏与尤克里里」。适合下午茶、做饭或阳光还没有完全退场的时候。', special: true },
  { id: 'playlist-seaside-fireworks', name: '播放歌单：海边烟花小甜曲', category: '一起看听', icon: '🎆', tagline: '把海风、烟花和甜甜的心情一起放进客厅。', people: '2–6人', time: '30–90分钟', type: '甜味流行、夏日歌单', difficulty: '打开即听', mood: 'lively', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「海边烟花小甜曲」。适合分享零食、拍照，或者给今天加一点夏日恋爱感。', special: true },
  { id: 'playlist-rock-out', name: '播放歌单：摇滚燥起来', category: '一起看听', icon: '🤘', tagline: '把音量拧高一点，客厅现在临时成为Livehouse。', people: '2–6人', time: '30–90分钟', type: '摇滚、热场歌单', difficulty: '打开即听', mood: 'lively', prep: 'Marshall音响、播放设备和对应歌单', how: '连接Marshall音响，播放「摇滚燥起来」。适合热场、桌游对抗或大家都想跟着节奏动起来的时候，注意控制音量。', special: true },

  { id: 'snack-test', name: '零食盲测局', category: '吃点', icon: '🍪', tagline: '暂时收起包装，味觉说了算。', people: '2–6人', time: '20–30分钟', mood: 'lively', prep: '3–5种零食和小碟子', how: '隐藏零食包装，依次品尝并猜口味、品牌或价格，最后选出今日零食冠军。', special: true },
  { id: 'takeout', name: '外卖命运轮盘', category: '吃点', icon: '🥡', tagline: '每个人提名一种，最后交给命运下单。', people: '2–6人', time: '10分钟点单', mood: 'relaxed', prep: '外卖应用', how: '每个人提名一家店或一种食物，排除忌口后随机抽取。抽中后直接下单，不再继续纠结。', special: false },
  { id: 'crayfish', name: '小龙虾作战会议', category: '吃点', icon: '🦞', tagline: '一边剥虾，一边处理今天最不重要的议题。', people: '2–6人', time: '60–90分钟', mood: 'lively', prep: '小龙虾、手套、纸巾和桌布', how: '选好口味后一起开吃，可以顺便评选剥虾最快、吃得最干净和最会聊天的人。', special: true },
  { id: 'ham-eggs', name: '火腿鸡蛋', category: '吃点', icon: '🍳', tagline: '简单、热乎，是最不需要解释的一盘家常味。', people: '2–6人', time: '10–15分钟', type: '家常菜', difficulty: '简单', mood: 'relaxed', prep: '鸡蛋、火腿、生抽和少量食用油', how: '火腿切片煎香，加入蛋液炒至刚好凝固，最后用少量生抽调味。适合聚会刚开始时快速上桌。', special: true },
  { id: 'tomato-eggs', name: '番茄炒蛋', category: '吃点', icon: '🍅', tagline: '酸甜刚刚好，永远有人愿意多盛半碗饭。', people: '2–6人', time: '15–20分钟', type: '家常菜', difficulty: '简单', mood: 'relaxed', prep: '番茄、鸡蛋、盐、糖和食用油', how: '鸡蛋炒至嫩熟后盛出，番茄炒出汤汁，再让鸡蛋回锅。按今天的口味决定偏酸还是偏甜。', special: true },
  { id: 'tomato-beef-brisket', name: '番茄牛腩', category: '吃点', icon: '🥘', tagline: '让番茄慢慢熬成汤，也让聊天慢慢进入正题。', people: '2–6人', time: '约90–120分钟', type: '炖菜、家常菜', difficulty: '中等', mood: 'relaxed', prep: '牛腩、番茄、洋葱、姜和基础调味料', how: '牛腩焯水后与炒软的番茄、洋葱一同炖至软烂。可以提前做好，朋友到访后再小火加热。', special: true },
  { id: 'teriyaki-chicken-leg', name: '照烧鸡腿', category: '吃点', icon: '🍗', tagline: '亮晶晶的酱汁，是米饭今天最期待的搭档。', people: '2–6人', time: '30–40分钟', type: '家常菜', difficulty: '简单', mood: 'relaxed', prep: '鸡腿、生抽、料酒、糖或蜂蜜', how: '鸡腿去骨煎至两面金黄，加入照烧汁焖至入味，收汁后切块分享。', special: true },
  { id: 'red-braised-ribs', name: '红烧排骨', category: '吃点', icon: '🍖', tagline: '锅里咕嘟一会儿，香味会替主人先招待大家。', people: '2–6人', time: '约60–90分钟', type: '家常菜', difficulty: '中等', mood: 'relaxed', prep: '排骨、生抽、老抽、料酒、冰糖和姜', how: '排骨焯水后炒糖色，加入调味料与热水焖煮，最后大火收汁。建议提前炖好，让味道更从容。', special: true },
  { id: 'stir-fried-cabbage', name: '清炒白菜', category: '吃点', icon: '🥬', tagline: '在一桌热闹里，留一盘清清爽爽的位置。', people: '2–6人', time: '约10分钟', type: '家常菜、时蔬', difficulty: '简单', mood: 'relaxed', prep: '白菜、盐、蒜和食用油', how: '蒜末爆香后放入白菜大火快炒，保持清脆，出锅前用盐简单调味。', special: true },
  { id: 'stir-fried-a-choy', name: '清炒油麦菜', category: '吃点', icon: '🥗', tagline: '脆生生的一盘绿色，负责让整桌饭轻盈一点。', people: '2–6人', time: '约10分钟', type: '家常菜、时蔬', difficulty: '简单', mood: 'relaxed', prep: '油麦菜、蒜、盐和食用油', how: '油麦菜洗净切段，蒜末爆香后大火快速翻炒，断生即可出锅。', special: true },
  { id: 'yellow-croaker-rice-cake', name: '黄鱼烧年糕', category: '吃点', icon: '🐟', tagline: '鱼鲜钻进软糯年糕里，是一锅很江南的满足。', people: '2–6人', time: '40–50分钟', type: '江浙菜', difficulty: '中等', mood: 'relaxed', prep: '黄鱼、年糕、葱姜、生抽和料酒', how: '黄鱼煎至定型后加入葱姜和调味料焖煮，再放年糕吸收汤汁，煮至软糯入味。', special: true },
  { id: 'bbq-seasoned-wings', name: '烧烤料鸡翅', category: '吃点', icon: '🍗', tagline: '不用点炭火，也能让客厅闻起来像一场夜市。', people: '2–6人', time: '35–45分钟', type: '家常菜、烤物', difficulty: '简单', mood: 'lively', prep: '鸡翅、烧烤料、生抽和少量食用油', how: '鸡翅划口腌制后，用烤箱、空气炸锅或平底锅烹熟，出锅前再撒一层烧烤料。', special: true },
  { id: 'garlic-oil-shrimp', name: '蒜油虾', category: '吃点', icon: '🦐', tagline: '蒜香一冒出来，大家就知道这顿饭正式开始了。', people: '2–6人', time: '15–20分钟', type: '西班牙风味、海鲜', difficulty: '简单', mood: 'lively', prep: '鲜虾、蒜、橄榄油、盐和辣椒碎', how: '蒜片用橄榄油小火煸香，加入处理好的虾煎至变色，以盐和辣椒碎调味，趁热分享。', special: true },
  { id: 'chicken-soup', name: '老母鸡汤', category: '吃点', icon: '🍲', tagline: '一碗慢慢炖出来的汤，适合招待很久没见的人。', people: '2–6人', time: '约2–3小时', type: '汤、家常菜', difficulty: '中等', mood: 'relaxed', prep: '老母鸡、姜、葱和可选菌菇', how: '鸡肉焯水后加足量清水与姜葱慢炖，出锅前再放盐。适合提前准备，聚会时直接保温上桌。', special: true },
  { id: 'red-braised-beef-steak', name: '红烧牛排', category: '吃点', icon: '🥩', tagline: '不是西餐厅的牛排，是一锅认真入味的家常硬菜。', people: '2–6人', time: '约60–90分钟', type: '家常菜、炖菜', difficulty: '中等', mood: 'lively', prep: '带骨牛排、生抽、老抽、料酒、香料和姜', how: '牛排焯水后煸香，与调味料和热水一同焖至软嫩，最后收汁。也可以加入土豆或胡萝卜。', special: true },
  { id: 'lotus-root-rib-soup', name: '排骨藕汤', category: '吃点', icon: '🥣', tagline: '藕粉粉的，汤暖暖的，适合一桌人慢慢喝。', people: '2–6人', time: '约90–120分钟', type: '汤、家常菜', difficulty: '中等', mood: 'relaxed', prep: '排骨、莲藕、姜和盐', how: '排骨焯水后与莲藕、姜片一同慢炖，直到排骨软嫩、莲藕粉糯，出锅前调味。', special: true },
  { id: 'garlic-lemon-wings', name: '蒜香柠檬鸡翅', category: '吃点', icon: '🍋', tagline: '蒜香负责馋人，柠檬负责把味道轻轻提亮。', people: '2–6人', time: '35–45分钟', type: '家常菜、烤物', difficulty: '简单', mood: 'lively', prep: '鸡翅、蒜、柠檬、生抽和蜂蜜', how: '鸡翅用蒜末、柠檬汁和调味料腌制，再烤或煎至表面金黄，出锅后刨少许柠檬皮屑。', special: true },
  { id: 'egg-tarts', name: '蛋挞', category: '吃点', icon: '🥧', tagline: '酥皮一响，甜点时间就算正式开场。', people: '2–6人', time: '30–40分钟', type: '烘焙、甜点', difficulty: '简单', mood: 'relaxed', prep: '蛋挞皮、鸡蛋、牛奶、淡奶油和糖', how: '混合蛋挞液后过筛倒入挞皮，烤至表面出现焦糖色斑点。建议出炉稍凉后再吃。', special: true },
  { id: 'mixed-vegetable-soup', name: '什锦菜汤', category: '吃点', icon: '🥕', tagline: '冰箱里每一种蔬菜，都可以在这锅汤里找到位置。', people: '2–6人', time: '20–30分钟', type: '汤、家常菜', difficulty: '简单', mood: 'relaxed', prep: '现有蔬菜、菌菇、清汤或清水和盐', how: '把耐煮蔬菜先下锅，再加入叶菜和菌菇，煮至熟软后简单调味。根据当天冰箱内容自由组合。', special: true },
  { id: 'garlic-chicken-breast', name: '蒜香鸡胸肉', category: '吃点', icon: '🍗', tagline: '认真煎到金黄，鸡胸肉也可以一点都不委屈。', people: '2–6人', time: '20–30分钟', type: '家常菜', difficulty: '简单', mood: 'relaxed', prep: '鸡胸肉、蒜、生抽、黑胡椒和少量食用油', how: '鸡胸肉切片或轻拍后腌制，平底锅煎至两面金黄，加入蒜末和少量酱汁翻匀。', special: true },
  { id: 'sweet-sour-ribs', name: '糖醋排骨', category: '吃点', icon: '🍖', tagline: '酸甜亮晶晶，是一盘很容易被提前吃光的菜。', people: '2–6人', time: '约50–70分钟', type: '家常菜', difficulty: '中等', mood: 'lively', prep: '排骨、醋、糖、生抽、料酒和姜', how: '排骨焯水煎香后焖熟，再加入糖醋汁大火收浓，让每块排骨均匀裹汁。', special: true },
  { id: 'cream-vegetable-soup', name: '奶油蔬菜汤', category: '吃点', icon: '🥣', tagline: '柔软、浓郁，像把法式小馆的一盏灯端上了桌。', people: '2–6人', time: '30–40分钟', type: '北欧风味、浓汤', difficulty: '简单', mood: 'relaxed', prep: '土豆、洋葱、胡萝卜、牛奶或淡奶油和黄油', how: '蔬菜炒香后加水或高汤煮软，部分打碎增加浓稠度，再加入牛奶或淡奶油轻煮调味。', special: true },

  { id: 'cuba-libre', name: '自由古巴', category: '喝点', icon: '🍋', tagline: '朗姆、可乐和青柠，给沙发区放一点加勒比海。', people: '1–6人', time: '约5分钟', type: '鸡尾酒', difficulty: '简单', mood: 'lively', prep: '朗姆酒、可乐、青柠和冰块', how: '在装有冰块的杯中加入朗姆酒和可乐，挤入青柠汁并轻轻搅拌。饮酒适量，也可制作低酒精版本。', special: true },
  { id: 'long-island-iced-tea', name: '长岛冰茶', category: '喝点', icon: '🫖', tagline: '名字里有茶，性格却一点也不温吞。', people: '1–6人', time: '约10分钟', type: '鸡尾酒', difficulty: '中等', mood: 'lively', prep: '基酒组合、柠檬汁、糖浆、可乐和冰块', how: '由主理人按照熟悉的配方调制，建议小杯分享或降低基酒用量。这款酒度数较高，请控制饮用量。', special: true },
  { id: 'tequila-sunrise', name: '龙舌兰日出', category: '喝点', icon: '🌅', tagline: '把日出装进杯子里，什么时候来都不算晚。', people: '1–6人', time: '约5分钟', type: '鸡尾酒', difficulty: '简单', mood: 'relaxed', prep: '龙舌兰、橙汁、红石榴糖浆和冰块', how: '杯中加入冰块、龙舌兰和橙汁，再沿杯壁缓慢加入红石榴糖浆，保留日出般的渐变。', special: true },
  { id: 'aperol-spritz', name: '阿佩罗橙光', category: '喝点', icon: '🧡', tagline: '一杯橙色气泡，把客厅调成度假模式。', people: '1–6人', time: '约5分钟', type: '气泡鸡尾酒', difficulty: '简单', mood: 'relaxed', prep: '阿佩罗、起泡酒、苏打水、橙片和冰块', how: '冰杯中加入阿佩罗、起泡酒和少量苏打水，轻轻搅拌后放入橙片。也可降低酒精比例。', special: true },
  { id: 'plum-wine', name: '梅子酒', category: '喝点', icon: '🍑', tagline: '酸甜慢慢来，聊天也不用着急。', people: '1–6人', time: '即开即饮', type: '果味酒', difficulty: '入门', mood: 'relaxed', prep: '梅子酒、杯子；冰块可选', how: '选择纯饮、加冰或兑苏打水。先少量倒入，边喝边聊，不以喝完为目标。', special: true },
  { id: 'longan-red-date-goji-water', name: '桂圆红枣枸杞水', category: '喝点', icon: '🫖', tagline: '一壶温温柔柔的甜，把聊天慢慢煮暖。', people: '1–6人', time: '约15–20分钟', type: '无酒精暖饮', difficulty: '简单', mood: 'relaxed', prep: '桂圆、红枣、枸杞和清水', how: '红枣去核后与桂圆一同加水煮约十五分钟，关火前放入枸杞。自然清甜即可，也可以按口味加少量红糖。', special: true },
  { id: 'longan-red-date-goji-milk', name: '桂圆红枣枸杞奶', category: '喝点', icon: '🥛', tagline: '把东方甜汤添一层奶香，柔软得像一条小毯子。', people: '1–6人', time: '约15–20分钟', type: '无酒精奶饮', difficulty: '简单', mood: 'relaxed', prep: '桂圆、红枣、枸杞、牛奶和少量清水', how: '先用少量清水煮出桂圆和红枣的甜味，再加入牛奶小火加热，最后放入枸杞。避免沸腾，以免牛奶结皮或溢锅。', special: true },
  { id: 'mood-drink', name: '调一杯今天的心情', category: '喝点', icon: '🍹', tagline: '把今天的心情，变成一种可以喝的颜色。', people: '2–6人', time: '20–40分钟', type: '自由特调', difficulty: '自由发挥', mood: 'relaxed', prep: '饮料、冰块、杯子；酒精完全可选', how: '每人从现有材料中调一杯饮料，为它取名，并用一句话解释它为什么代表今天。', special: true },
  { id: 'apple-sour', name: '苹果酸酸乐', category: '喝点', icon: '🍏', tagline: '酸一点，脆一点，把精神重新打开。', people: '1–6人', time: '约5分钟', type: '无酒精特调', difficulty: '简单', mood: 'lively', prep: '苹果汁、气泡水、柠檬或青柠和冰块', how: '苹果汁加入冰块和气泡水，再挤入柠檬或青柠汁。喜欢更酸可以增加柠檬比例。', special: true },
  { id: 'alcohol-free-test', name: '无酒精盲品', category: '喝点', icon: '🥤', tagline: '没有酒精，也照样可以认真猜一杯。', people: '2–6人', time: '15–30分钟', type: '盲品小游戏', difficulty: '简单', mood: 'lively', prep: '3–5种无酒精饮料和相同杯子', how: '隐藏包装后依次小份品尝，猜饮料种类、口味或品牌，最后选出最受欢迎的一款。', special: true },
  { id: 'orange-juice', name: '橙汁', category: '喝点', icon: '🍊', tagline: '不绕弯子，今天就是想喝一杯橙汁。', people: '1–6人', time: '即开即饮', type: '无酒精', difficulty: '零难度', mood: 'relaxed', prep: '橙汁和杯子', how: '冷藏、加冰或直接喝都可以。复杂的菜单里，也应该保留一个简单答案。', special: false },
  { id: 'cola', name: '可乐', category: '喝点', icon: '🥤', tagline: '熟悉、可靠，并且和大多数零食都合得来。', people: '1–6人', time: '即开即饮', type: '无酒精', difficulty: '零难度', mood: 'lively', prep: '可乐和杯子', how: '冰镇后直接饮用，也可以加冰和柠檬片。', special: false },
  { id: 'sprite', name: '雪碧', category: '喝点', icon: '🫧', tagline: '让气泡替大家说一句：轻松一点。', people: '1–6人', time: '即开即饮', type: '无酒精', difficulty: '零难度', mood: 'lively', prep: '雪碧和杯子', how: '冰镇后直接饮用，也可以加入柠檬、薄荷或水果做成简单气泡饮。', special: false },
  { id: 'water', name: '平平淡淡才是真', category: '喝点', icon: '💧', tagline: '喝杯水吧，真正的主理人知道什么时候该朴素。', people: '1–6人', time: '即开即饮', type: '矿泉水', difficulty: '零难度', mood: 'relaxed', prep: '矿泉水', how: '倒一杯水，认真补充水分。饮酒间隙抽到这一项时，建议直接执行。', special: false },

  { id: 'typewriter-poem', name: '一字一响，打出一首诗', category: '隐藏款', icon: '⌨️', tagline: '让字一个一个落在纸上，带走一份只出现一次的诗。', people: '1–6人', time: '15–30分钟', mood: 'relaxed', prep: '打字机、纸张和短诗卡片', how: '抽取一首短诗，每个人轮流打下一行；也可以选择独自完成。最后写下日期和参与者名字。', special: true, hidden: true },
  { id: 'adopt-plant', name: '带一位绿色室友回家', category: '隐藏款', icon: '🪴', tagline: '从这里带走一位安静的新朋友。', people: '1–6人', time: '10–20分钟', mood: 'relaxed', prep: '可认领的小植物、名字卡和养护说明', how: '选择或随机抽取一盆小植物，为它取名，写下认领日期，并带回家继续照顾。', special: true, hidden: true },
  { id: 'book-blind-bag', name: '命运之书盲袋', category: '隐藏款', icon: '📚', tagline: '不看书名，把这次相遇交给一点命运。', people: '1–6人', time: '5–10分钟', mood: 'relaxed', prep: '准备好的书籍盲袋', how: '从书籍盲袋中随机抽取一个带走。可以现场拆开，了解这本书的主题，以及主理人为什么想把它分享给你。', special: true, hidden: true },
  { id: 'fridge-magnet-diy', name: '成为冰箱门艺术家', category: '隐藏款', icon: '🧲', tagline: '做一块独一无二的冰箱贴，把今天留在门上。', people: '1–6人', time: '20–40分钟', mood: 'relaxed', prep: '冰箱贴底片、黏土或绘画材料、磁片和胶', how: '每个人设计并制作一块小冰箱贴，可以带走，也可以签上名字留在招待所的冰箱门上。', special: true, hidden: true },
  { id: 'friendship-polaroid', name: '留下一张友情拍立得', category: '隐藏款', icon: '📷', tagline: '按下快门，让这次见面拥有一张真正摸得到的证据。', people: '2–6人', time: '10–15分钟', mood: 'relaxed', prep: '拍立得、两张相纸和油性笔', how: '拍下两张不过度摆拍的合照，等待显影后在背面写下日期和一句话。一张留进招待所来客档案，一张由朋友带走。', special: true, hidden: true }
];

const CATEGORIES = ['全部', '一起玩', '一起看听', '吃点', '喝点', '隐藏款'];
const STORAGE = {
  order: 'littleNest.order.v1',
  disabled: 'littleNest.disabled.v1',
  history: 'littleNest.history.v1'
};

const state = {
  view: 'home',
  mood: 'all',
  category: '全部',
  selected: null,
  dialogDish: null,
  hiddenRevealed: false,
  order: readStorage(STORAGE.order, []).filter(order => MENU.some(item => item.id === order.id)),
  disabled: readStorage(STORAGE.disabled, []),
  history: readStorage(STORAGE.history, [])
};

const views = [...document.querySelectorAll('.view')];
const menuList = document.getElementById('menuList');
const categoryTabs = document.getElementById('categoryTabs');
const dishDialog = document.getElementById('dishDialog');
const hostGateDialog = document.getElementById('hostGateDialog');
const hostDialog = document.getElementById('hostDialog');
const ticketDialog = document.getElementById('ticketDialog');
const toast = document.getElementById('toast');
const hostGateForm = document.getElementById('hostGateForm');
const hostPin = document.getElementById('hostPin');
const hostGateError = document.getElementById('hostGateError');
const HOST_PIN = '1110';

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : fallback;
  } catch (_) {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE.order, JSON.stringify(state.order));
  localStorage.setItem(STORAGE.disabled, JSON.stringify(state.disabled));
  localStorage.setItem(STORAGE.history, JSON.stringify(state.history.slice(-8)));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}

function go(view) {
  state.view = view;
  views.forEach(section => section.classList.toggle('is-active', section.dataset.view === view));
  document.querySelectorAll('[data-nav-view]').forEach(button => {
    const active = button.dataset.navView === view;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  if (view === 'menu') renderMenu();
  if (view === 'order') renderOrder();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function enabledItems() {
  return MENU.filter(item => !state.disabled.includes(item.id));
}

function drawDish() {
  let pool = enabledItems().filter(item => !state.order.some(order => order.id === item.id));
  if (state.mood !== 'all') pool = pool.filter(item => item.mood === state.mood);
  const recent = new Set(state.history.slice(-4));
  const freshPool = pool.filter(item => !recent.has(item.id));
  if (freshPool.length) pool = freshPool;
  if (!pool.length) pool = enabledItems();
  if (!pool.length) {
    showToast('主理人把今天的招待都收起来了');
    return;
  }

  const normal = pool.filter(item => !item.hidden);
  const hidden = pool.filter(item => item.hidden);
  if (normal.length && hidden.length && Math.random() > .16) pool = normal;

  state.selected = pool[Math.floor(Math.random() * pool.length)];
  state.history.push(state.selected.id);
  saveState();
  renderResult(state.selected);
  go('result');
  const card = document.getElementById('resultCard');
  card.classList.add('is-shuffling');
  window.setTimeout(() => card.classList.remove('is-shuffling'), 520);
}

function metaHtml(item) {
  return [
    item.people,
    item.time,
    item.type,
    item.difficulty ? `难度：${item.difficulty}` : null,
    item.mood === 'lively' ? '热闹' : '放松'
  ].filter(Boolean).map(value => `<span>${escapeHtml(value)}</span>`).join('');
}

function updateOfficialLink(elementId, url) {
  const link = document.getElementById(elementId);
  link.hidden = !url;
  link.href = url || '#';
}

function renderResult(item) {
  document.getElementById('resultIcon').textContent = item.icon;
  document.getElementById('resultCategory').textContent = item.hidden ? '隐藏款已揭晓' : item.category;
  document.getElementById('resultTitle').textContent = item.name;
  document.getElementById('resultTagline').textContent = item.tagline;
  document.getElementById('resultMeta').innerHTML = metaHtml(item);
  document.getElementById('resultHow').textContent = item.how;
  document.getElementById('resultPrep').textContent = item.prep;
  updateOfficialLink('resultOfficialLink', item.officialLink);
}

function renderCategories() {
  categoryTabs.innerHTML = CATEGORIES.map(category => `
    <button type="button" role="tab" aria-selected="${category === state.category}" class="${category === state.category ? 'is-selected' : ''}" data-category="${category}">${category}</button>
  `).join('');
}

function renderMenu() {
  renderCategories();
  let items = MENU.filter(item => state.category === '全部' ? !item.hidden : item.category === state.category);
  if (state.category === '隐藏款' && !state.hiddenRevealed) {
    menuList.innerHTML = `
      <button class="menu-card hidden-card" type="button" id="revealHiddenButton">
        <span class="menu-icon">🎁</span>
        <span class="menu-copy"><strong>今日隐藏款 · 5份</strong><span>拆开以后，才知道招待所藏了什么</span></span>
        <span class="menu-add">?</span>
      </button>`;
    document.getElementById('menuCount').textContent = '神秘';
    return;
  }

  document.getElementById('menuCount').textContent = `${items.length} 项`;
  menuList.innerHTML = items.map(item => {
    const disabled = state.disabled.includes(item.id);
    return `
      <button class="menu-card" type="button" data-dish="${item.id}" ${disabled ? 'disabled' : ''}>
        <span class="menu-icon">${item.icon}</span>
        <span class="menu-copy"><strong>${escapeHtml(item.name)}</strong><span>${disabled ? '今日暂停招待' : `${escapeHtml(item.time)} · ${item.mood === 'lively' ? '热闹' : '放松'}`}</span></span>
        <span class="menu-add">＋</span>
      </button>`;
  }).join('');
}

function showDish(id) {
  const item = MENU.find(dish => dish.id === id);
  if (!item) return;
  state.dialogDish = item;
  document.getElementById('dialogIcon').textContent = item.icon;
  document.getElementById('dialogCategory').textContent = item.hidden ? '隐藏款' : item.category;
  document.getElementById('dialogTitle').textContent = item.name;
  document.getElementById('dialogTagline').textContent = item.tagline;
  document.getElementById('dialogMeta').innerHTML = metaHtml(item);
  document.getElementById('dialogHow').textContent = item.how;
  document.getElementById('dialogPrep').textContent = item.prep;
  updateOfficialLink('dialogOfficialLink', item.officialLink);
  document.getElementById('dialogAddButton').textContent = state.order.some(order => order.id === id) ? '已经在今日招待里' : '加入今日招待';
  document.getElementById('dialogAddButton').disabled = state.order.some(order => order.id === id);
  dishDialog.showModal();
}

function addToOrder(item) {
  if (!item || state.order.some(order => order.id === item.id)) {
    showToast('这份快乐已经选过了');
    return;
  }
  state.order.push({ id: item.id, done: false });
  saveState();
  updateCounts();
  showToast(`今日招待已加入：${item.name}`);
}

function renderOrder() {
  const validOrder = state.order.filter(order => MENU.some(item => item.id === order.id));
  state.order = validOrder;
  document.getElementById('orderCount').textContent = `${state.order.length} 项`;
  const actions = document.getElementById('orderActions');
  actions.hidden = state.order.length === 0;
  if (!state.order.length) {
    document.getElementById('orderList').innerHTML = `
      <div class="empty-state"><span class="empty-icon">🍽️</span><h2>今天还没选好</h2><p>去招待单里慢慢挑，或者交给一点运气。</p><button class="primary-button" type="button" data-go="menu">翻翻招待单</button></div>`;
    return;
  }

  document.getElementById('orderList').innerHTML = state.order.map((order, index) => {
    const item = MENU.find(dish => dish.id === order.id);
    return `
      <div class="order-card ${order.done ? 'is-done' : ''}">
        <span class="order-number">${String(index + 1).padStart(2, '0')}</span>
        <span class="order-copy"><span class="order-name">${item.icon} ${escapeHtml(item.name)}</span><span class="order-meta">${escapeHtml(item.time)} · ${order.done ? '尽兴完成' : '等待上桌'}</span></span>
        <span class="order-controls">
          <button class="mini-button" type="button" data-order-done="${item.id}" aria-label="${order.done ? '取消完成' : '标记完成'}">${order.done ? '↩' : '✓'}</button>
          <button class="mini-button" type="button" data-order-remove="${item.id}" aria-label="移除">×</button>
        </span>
      </div>`;
  }).join('');
}

function updateCounts() {
  document.getElementById('navOrderCount').textContent = state.order.length;
  document.getElementById('availabilityText').textContent = `今日 ${enabledItems().length} 项可招待 · 隐藏款会偶尔出现`;
}

function renderHost() {
  document.getElementById('hostList').innerHTML = MENU.map(item => {
    const enabled = !state.disabled.includes(item.id);
    return `
      <div class="host-row">
        <span><strong>${item.icon} ${escapeHtml(item.name)}</strong><small>${item.category} · ${item.special ? '需要准备' : '随时可用'}</small></span>
        <button class="switch" type="button" data-toggle-dish="${item.id}" aria-pressed="${enabled}" aria-label="${enabled ? '关闭' : '开放'}${escapeHtml(item.name)}"></button>
      </div>`;
  }).join('');
}

function showTicket() {
  if (!state.order.length) return;
  const items = state.order.map(order => ({ ...MENU.find(item => item.id === order.id), done: order.done }));
  const now = new Date();
  const date = new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' }).format(now);
  const ticketNumber = `${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(Math.floor(Math.random() * 90) + 10)}`;
  const awards = ['招待所首席气氛官', '隐藏款发现者', '友情赛常驻选手', '沙发体验研究员', '今日快乐大户', '随机性研究专家'];
  document.getElementById('ticketDate').textContent = date;
  document.getElementById('ticketNumber').textContent = `NO. ${ticketNumber}`;
  document.getElementById('ticketItems').innerHTML = items.map((item, index) => `<div class="ticket-item"><span>${index + 1}. ${escapeHtml(item.name)}</span><span>${item.done ? '完成' : '已点'}</span></div>`).join('');
  document.getElementById('ticketAward').textContent = awards[Math.floor(Math.random() * awards.length)];
  ticketDialog.classList.remove('is-photo-mode');
  ticketDialog.showModal();
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 1800);
}

function canvasToPng(canvas) {
  return new Promise((resolve, reject) => {
    if (canvas.toBlob) {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('无法生成 PNG'));
      }, 'image/png', 1);
      return;
    }

    try {
      const dataUrl = canvas.toDataURL('image/png', 1);
      const binary = window.atob(dataUrl.split(',')[1]);
      const bytes = new Uint8Array(binary.length);
      for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
      resolve(new Blob([bytes], { type: 'image/png' }));
    } catch (error) {
      reject(error);
    }
  });
}

function roundedRectPath(context, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
  context.closePath();
}

function fittedText(context, text, maxWidth) {
  if (context.measureText(text).width <= maxWidth) return text;
  let shortened = text;
  while (shortened.length && context.measureText(`${shortened}…`).width > maxWidth) shortened = shortened.slice(0, -1);
  return `${shortened}…`;
}

function drawCenteredText(context, text, x, y) {
  context.textAlign = 'center';
  context.fillText(text, x, y);
}

async function createTicketImage() {
  if (document.fonts && document.fonts.ready) await document.fonts.ready;

  const itemRows = Array.from(document.querySelectorAll('#ticketItems .ticket-item')).map(row => ({
    name: row.children[0] ? row.children[0].textContent : '',
    status: row.children[1] ? row.children[1].textContent : ''
  }));
  const rowHeight = 72;
  const canvasWidth = 680;
  const ticketX = 38;
  const ticketY = 42;
  const ticketWidth = 604;
  const itemsTop = 520;
  const tearY = itemsTop + Math.max(itemRows.length, 1) * rowHeight + 34;
  const ticketHeight = tearY + 390;
  const canvasHeight = ticketHeight + 84;
  const outputScale = 2;
  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth * outputScale;
  canvas.height = canvasHeight * outputScale;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('浏览器不支持图片生成');
  context.scale(outputScale, outputScale);

  const paper = '#fffaf0';
  const ink = '#3f302d';
  const muted = '#7b655e';
  const wine = '#984d59';
  const wineDark = '#7b3843';
  const gold = '#c8923f';
  const backdrop = '#493738';
  const centerX = canvasWidth / 2;

  context.fillStyle = backdrop;
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  context.save();
  context.shadowColor = 'rgba(28, 17, 18, .35)';
  context.shadowBlur = 42;
  context.shadowOffsetY = 20;
  roundedRectPath(context, ticketX, ticketY, ticketWidth, ticketHeight, 32);
  context.fillStyle = paper;
  context.fill();
  context.restore();

  context.save();
  roundedRectPath(context, ticketX, ticketY, ticketWidth, ticketHeight, 32);
  context.clip();
  context.fillStyle = 'rgba(152, 77, 89, .018)';
  for (let y = ticketY + 9; y < ticketY + ticketHeight; y += 13) context.fillRect(ticketX, y, ticketWidth, 2);
  context.fillStyle = 'rgba(200, 146, 63, .022)';
  for (let x = ticketX + 7; x < ticketX + ticketWidth; x += 23) context.fillRect(x, ticketY, 1, ticketHeight);
  context.restore();

  roundedRectPath(context, ticketX + 20, ticketY + 20, ticketWidth - 40, ticketHeight - 40, 22);
  context.strokeStyle = 'rgba(152, 77, 89, .22)';
  context.lineWidth = 2;
  context.stroke();

  context.fillStyle = backdrop;
  for (let x = ticketX + 13; x < ticketX + ticketWidth; x += 25) {
    context.beginPath();
    context.arc(x, ticketY, 7, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.arc(x, ticketY + ticketHeight, 7, 0, Math.PI * 2);
    context.fill();
  }

  const bookmarkX = ticketX + ticketWidth - 170;
  context.beginPath();
  context.moveTo(bookmarkX, ticketY);
  context.lineTo(bookmarkX + 88, ticketY);
  context.lineTo(bookmarkX + 88, ticketY + 184);
  context.lineTo(bookmarkX + 44, ticketY + 158);
  context.lineTo(bookmarkX, ticketY + 184);
  context.closePath();
  context.fillStyle = wineDark;
  context.fill();
  context.strokeStyle = 'rgba(226, 190, 123, .72)';
  context.lineWidth = 2;
  context.strokeRect(bookmarkX + 11, ticketY + 12, 66, 139);
  context.fillStyle = 'rgba(255, 250, 240, .92)';
  context.font = '700 22px "Songti SC", serif';
  drawCenteredText(context, '留', bookmarkX + 44, ticketY + 71);
  drawCenteredText(context, '念', bookmarkX + 44, ticketY + 101);
  context.fillStyle = 'rgba(255, 235, 205, .78)';
  context.font = '12px Georgia, serif';
  drawCenteredText(context, 'MÉMOIRE', bookmarkX + 44, ticketY + 133);

  context.beginPath();
  context.arc(centerX, ticketY + 119, 54, 0, Math.PI * 2);
  context.strokeStyle = gold;
  context.lineWidth = 5;
  context.stroke();
  context.beginPath();
  context.moveTo(centerX - 25, ticketY + 142);
  context.lineTo(centerX + 25, ticketY + 96);
  context.strokeStyle = 'rgba(152, 77, 89, .45)';
  context.lineWidth = 2;
  context.stroke();
  context.fillStyle = wine;
  context.font = '700 34px Georgia, serif';
  context.textAlign = 'center';
  context.fillText('W', centerX - 17, ticketY + 117);
  context.fillText('Y', centerX + 18, ticketY + 148);

  context.fillStyle = gold;
  context.font = '700 16px Georgia, serif';
  drawCenteredText(context, 'PRIVATE GUEST EDITION', centerX, ticketY + 205);
  context.fillStyle = ink;
  context.font = '700 48px Georgia, "Songti SC", serif';
  drawCenteredText(context, '随机招待所', centerX, ticketY + 270);
  context.fillStyle = muted;
  context.font = '15px Georgia, serif';
  drawCenteredText(context, 'MAISON DU HASARD · A LITTLE JOY', centerX, ticketY + 306);
  context.strokeStyle = 'rgba(152, 77, 89, .34)';
  context.beginPath();
  context.moveTo(centerX - 120, ticketY + 340);
  context.lineTo(centerX - 35, ticketY + 340);
  context.moveTo(centerX + 35, ticketY + 340);
  context.lineTo(centerX + 120, ticketY + 340);
  context.stroke();
  context.fillStyle = wine;
  context.font = '28px Georgia, serif';
  drawCenteredText(context, '❦', centerX, ticketY + 349);
  context.fillStyle = ink;
  context.font = '700 34px Georgia, "Songti SC", serif';
  drawCenteredText(context, '今日招待小票', centerX, ticketY + 399);
  context.fillStyle = muted;
  context.font = '20px -apple-system, "PingFang SC", sans-serif';
  const dateText = document.getElementById('ticketDate').textContent;
  const numberText = document.getElementById('ticketNumber').textContent;
  drawCenteredText(context, `${dateText}   ·   ${numberText}`, centerX, ticketY + 441);

  context.font = '24px -apple-system, "PingFang SC", sans-serif';
  itemRows.forEach((item, index) => {
    const y = ticketY + itemsTop + index * rowHeight;
    context.setLineDash([3, 7]);
    context.strokeStyle = 'rgba(98, 65, 57, .32)';
    context.beginPath();
    context.moveTo(ticketX + 54, y + rowHeight - 10);
    context.lineTo(ticketX + ticketWidth - 54, y + rowHeight - 10);
    context.stroke();
    context.setLineDash([]);
    context.fillStyle = ink;
    context.textAlign = 'left';
    context.fillText(fittedText(context, item.name, 360), ticketX + 58, y + 38);
    context.fillStyle = wine;
    context.textAlign = 'right';
    context.fillText(item.status, ticketX + ticketWidth - 58, y + 38);
  });

  const absoluteTearY = ticketY + tearY;
  context.setLineDash([10, 12]);
  context.strokeStyle = 'rgba(152, 77, 89, .38)';
  context.beginPath();
  context.moveTo(ticketX, absoluteTearY);
  context.lineTo(ticketX + ticketWidth, absoluteTearY);
  context.stroke();
  context.setLineDash([]);
  context.fillStyle = backdrop;
  [ticketX, ticketX + ticketWidth].forEach(x => {
    context.beginPath();
    context.arc(x, absoluteTearY, 24, 0, Math.PI * 2);
    context.fill();
  });

  const awardY = absoluteTearY + 54;
  roundedRectPath(context, ticketX + 56, awardY, ticketWidth - 112, 146, 26);
  context.fillStyle = 'rgba(232, 199, 193, .38)';
  context.fill();
  context.strokeStyle = 'rgba(152, 77, 89, .2)';
  context.stroke();
  context.fillStyle = muted;
  context.font = '18px -apple-system, "PingFang SC", sans-serif';
  drawCenteredText(context, '今日来客称号', centerX, awardY + 42);
  context.fillStyle = wine;
  context.font = '700 40px Georgia, "Songti SC", serif';
  drawCenteredText(context, fittedText(context, document.getElementById('ticketAward').textContent, 410), centerX, awardY + 101);
  context.fillStyle = ink;
  context.font = '24px "Songti SC", serif';
  drawCenteredText(context, '谢谢到访，愿这点快乐刚刚好。', centerX, awardY + 210);
  context.fillStyle = muted;
  context.font = '14px Georgia, "Songti SC", serif';
  drawCenteredText(context, 'POUR LES AMIS · 只为朋友开放', centerX, awardY + 250);

  return canvasToPng(canvas);
}

function ticketImageName() {
  const now = new Date();
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  return `随机招待所-${date}.png`;
}

function downloadTicketImage(blob, fileName) {
  const imageUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = fileName;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(imageUrl), 60000);
}

async function saveTicketImage() {
  const button = document.getElementById('saveTicketImageButton');
  const originalLabel = button.textContent;
  button.disabled = true;
  button.textContent = '正在装裱小票…';

  try {
    const blob = await createTicketImage();
    const fileName = ticketImageName();
    downloadTicketImage(blob, fileName);
    showToast('小票 PNG 已开始下载');
  } catch (error) {
    showToast('图片生成失败，请使用截图模式保存');
  } finally {
    button.disabled = false;
    button.textContent = originalLabel;
  }
}

document.addEventListener('click', event => {
  const goButton = event.target.closest('[data-go]');
  if (goButton) go(goButton.dataset.go);

  const moodButton = event.target.closest('[data-mood]');
  if (moodButton) {
    state.mood = moodButton.dataset.mood;
    document.querySelectorAll('[data-mood]').forEach(button => {
      const selected = button === moodButton;
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  const categoryButton = event.target.closest('[data-category]');
  if (categoryButton) {
    state.category = categoryButton.dataset.category;
    renderMenu();
  }

  const dishButton = event.target.closest('[data-dish]');
  if (dishButton) showDish(dishButton.dataset.dish);

  if (event.target.closest('#revealHiddenButton')) {
    state.hiddenRevealed = true;
    renderMenu();
  }

  const doneButton = event.target.closest('[data-order-done]');
  if (doneButton) {
    const order = state.order.find(item => item.id === doneButton.dataset.orderDone);
    if (order) order.done = !order.done;
    saveState();
    renderOrder();
  }

  const removeButton = event.target.closest('[data-order-remove]');
  if (removeButton) {
    state.order = state.order.filter(item => item.id !== removeButton.dataset.orderRemove);
    saveState();
    updateCounts();
    renderOrder();
  }

  const toggleButton = event.target.closest('[data-toggle-dish]');
  if (toggleButton) {
    const id = toggleButton.dataset.toggleDish;
    state.disabled = state.disabled.includes(id) ? state.disabled.filter(item => item !== id) : [...state.disabled, id];
    saveState();
    updateCounts();
    renderHost();
  }

  const closeButton = event.target.closest('[data-close-dialog]');
  if (closeButton) closeButton.closest('dialog').close();
});

document.getElementById('drawButton').addEventListener('click', drawDish);
document.getElementById('navDrawButton').addEventListener('click', drawDish);
document.getElementById('redrawButton').addEventListener('click', drawDish);
document.getElementById('acceptButton').addEventListener('click', () => {
  addToOrder(state.selected);
  go('order');
});
document.getElementById('dialogAddButton').addEventListener('click', () => {
  addToOrder(state.dialogDish);
  dishDialog.close();
});
document.getElementById('hostButton').addEventListener('click', () => {
  hostPin.value = '';
  hostGateError.textContent = '';
  hostGateDialog.classList.remove('is-wrong');
  hostGateDialog.showModal();
  window.requestAnimationFrame(() => hostPin.focus());
});
hostPin.addEventListener('input', () => {
  hostPin.value = hostPin.value.replace(/\D/g, '').slice(0, 4);
  hostGateError.textContent = '';
});
hostGateForm.addEventListener('submit', event => {
  event.preventDefault();
  if (hostPin.value === HOST_PIN) {
    hostGateDialog.close();
    renderHost();
    hostDialog.showModal();
    return;
  }
  hostGateError.textContent = '好像不是这个生日，再想想。';
  hostGateDialog.classList.remove('is-wrong');
  window.requestAnimationFrame(() => hostGateDialog.classList.add('is-wrong'));
  hostPin.select();
});
document.getElementById('finishButton').addEventListener('click', showTicket);
document.getElementById('saveTicketImageButton').addEventListener('click', saveTicketImage);
document.getElementById('photoModeButton').addEventListener('click', () => {
  ticketDialog.classList.add('is-photo-mode');
});
document.getElementById('keepsakeTicket').addEventListener('click', () => {
  if (ticketDialog.classList.contains('is-photo-mode')) ticketDialog.classList.remove('is-photo-mode');
});
document.getElementById('enableAllButton').addEventListener('click', () => {
  state.disabled = [];
  saveState();
  updateCounts();
  renderHost();
});
document.getElementById('disableSpecialButton').addEventListener('click', () => {
  state.disabled = MENU.filter(item => item.special).map(item => item.id);
  saveState();
  updateCounts();
  renderHost();
});
document.getElementById('clearSessionButton').addEventListener('click', () => {
  state.order = [];
  state.history = [];
  saveState();
  updateCounts();
  showToast('今日招待已清空');
});
document.getElementById('newSessionButton').addEventListener('click', () => {
  state.order = [];
  state.history = [];
  saveState();
  updateCounts();
  ticketDialog.classList.remove('is-photo-mode');
  ticketDialog.close();
  go('home');
});

[dishDialog, hostGateDialog, hostDialog, ticketDialog].forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    if (dialog === ticketDialog && ticketDialog.classList.contains('is-photo-mode')) {
      ticketDialog.classList.remove('is-photo-mode');
      return;
    }
    dialog.close();
  });
});

renderCategories();
updateCounts();
