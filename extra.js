// Additional source-based contexts. Every row produces a context question and
// an immediate recall question; explanations are assembled from short glosses.
const extraRows = [
  {s:'2024 · 年终试卷',p:'我们还要找一个灯光____的地方，星星微弱的光芒才会显得更明亮。',c:['偏僻','昏暗','乌黑','遥远'],a:1,g:['remote','dim','pitch-black','distant'],t:'昏暗',m:'光线不明亮',e:'dimly lit'},
  {s:'2024 · 年终试卷',p:'家庭的温暖和安全感是人们最好的依靠，能帮助我们面对生活中的____。',c:['约束','限制','困难','疑问'],a:2,g:['constraints','limits','difficulties','questions'],t:'困难',m:'不容易解决的事',e:'difficulties'},
  {s:'2024 · 年终试卷',p:'如果每名家庭成员都互相关怀、互相扶持，家庭____就健康和谐。',c:['自然而然','理所当然','不约而同','不由自主'],a:0,g:['naturally','as expected','in unison','involuntarily'],t:'自然而然',m:'不用刻意安排就发生',e:'happening naturally'},
  {s:'2024 · 年终试卷',p:'奶奶每天发有趣的视频给义心，也和他____，关心他的生活。',c:['慰问','交代','留言','聊天'],a:3,g:['express sympathy','instruct','leave messages','chat'],t:'聊天',m:'轻松地交谈',e:'chatting'},
  {s:'2024 · 年终试卷',p:'奶奶跟得上科技的发展。明志问：“她____是怎么做到的？”',c:['竟然','究竟','反而','反正'],a:1,g:['unexpectedly','exactly','instead','anyway'],t:'究竟',m:'到底、确切地',e:'exactly or after all'},
  {s:'2024 · 年终试卷',p:'奶奶上过课程后，了解手机的基本____，知道怎么使用手机。',c:['作用','效果','方法','功能'],a:3,g:['role','effect','method','functions'],t:'功能',m:'事物所具有的用途',e:'functions or uses'},
  {s:'2024 · 年终试卷',p:'以往，体校新生一入学就被____到他们感兴趣的运动项目。',c:['分配','分发','分别','分类'],a:0,g:['assign','distribute','separately','classify'],t:'分配',m:'按安排交给各人或各组',e:'assigning or allocating'},
  {s:'2024 · 年终试卷',p:'修读多元运动学系的学生，在一、二年级会先____三种不同运动。',c:['习惯','查看','品尝','接触'],a:3,g:['get used to','inspect','taste','try or encounter'],t:'接触',m:'开始了解或尝试',e:'encountering or trying'},
  {s:'2021 · 年中试卷',p:'自然连道将从八十公里延伸至一百八十公里，也会适时____植物种类。',c:['增加','增进','融入','输入'],a:0,g:['increase','improve relations','blend in','input'],t:'增加',m:'使数量变多',e:'increasing'},
  {s:'2021 · 年中试卷',p:'小丽看到公共座椅上的垃圾，决定去____这些垃圾。',c:['接收','招收','清理','整理'],a:2,g:['receive','recruit','clear away','tidy'],t:'清理',m:'把杂物处理干净',e:'clearing away'},
  {s:'2021 · 年中试卷',p:'小丽说，如果每个人都乱丢垃圾，就会____我们的环境。',c:['消灭','牺牲','损坏','污染'],a:3,g:['destroy','sacrifice','damage','pollute'],t:'污染',m:'使环境变脏或有害',e:'polluting'},
  {s:'2021 · 年中试卷',p:'志华先说清理垃圾是清洁工人的工作，听了小丽的话便感到____。',c:['害羞','惭愧','后悔','痛苦'],a:1,g:['shy','ashamed','regretful','in pain'],t:'惭愧',m:'因自己做得不好而不好意思',e:'feeling ashamed'},
  {s:'2021 · 年中试卷',p:'民众俱乐部为退休人士____了课程，帮助他们学习使用科技产品。',c:['开设','开创','推动','推行'],a:0,g:['offer a course','pioneer','promote','implement'],t:'开设',m:'设立课程或机构',e:'establishing or offering'},
  {s:'2021 · 年中试卷',p:'一些长者担心学不会使用平板电脑，遇到问题时会____。',c:['面红耳赤','刮目相看','聚精会神','不知所措'],a:3,g:['red-faced','see anew','concentrate','at a loss'],t:'不知所措',m:'不知道该怎么办',e:'not knowing what to do'},
  {s:'2021 · 年终试卷',p:'“无塑料袋计划”期间，超市不会免费为顾客____塑料袋。',c:['提供','奉献','分配','传递'],a:0,g:['provide','devote','allocate','pass along'],t:'提供',m:'拿出东西供别人使用',e:'providing'},
  {s:'2021 · 年终试卷',p:'无塑料袋计划希望人们____环保，减少使用塑料袋。',c:['呈现','赞成','欢迎','支持'],a:3,g:['display','approve','welcome','support'],t:'支持',m:'赞同并给予帮助',e:'supporting'},
  {s:'2021 · 年终试卷',p:'小贩中心安装饮水机，主要____是让人们少喝高糖饮料。',c:['方向','目的','终点','主题'],a:1,g:['direction','purpose','destination','theme'],t:'目的',m:'想要达到的目标',e:'purpose or goal'},
  {s:'2021 · 年终试卷',p:'饮水机放在不显眼的角落，无法引起人们的____。',c:['谅解','关心','注意','尊重'],a:2,g:['understanding','concern','attention','respect'],t:'注意',m:'把目光或心思放在某处',e:'attention'},
  {s:'2022 · 年中试卷',p:'国人在三巴旺温泉公园泡脚，也能和亲友____感情。',c:['进步','交换','增添','联络'],a:3,g:['progress','exchange','add to','maintain contact'],t:'联络',m:'互相联系、交流',e:'keeping in touch'},
  {s:'2022 · 年中试卷',p:'志华想在父亲节送爸爸亲手做的蛋糕。月美问他：“你____了什么礼物？”',c:['提供','接收','准备','选用'],a:2,g:['provide','receive','prepare','select'],t:'准备',m:'事先安排好',e:'preparing'},
  {s:'2022 · 年中试卷',p:'月美相信，爸爸看见志华亲手做的蛋糕，一定会非常____。',c:['渴望','感动','有趣','幸运'],a:1,g:['long for','moved','interesting','fortunate'],t:'感动',m:'因别人的心意而心里受到触动',e:'emotionally moved'},
  {s:'2022 · 年中试卷',p:'超市每个月会____大约五十个购物篮，可能有顾客带回家。',c:['派送','损坏','分发','遗失'],a:3,g:['deliver','damage','distribute','lose'],t:'遗失',m:'不小心把东西弄丢',e:'losing something'},
  {s:'2022 · 年中试卷',p:'有网民____超市在购物篮贴二维码，以避免购物篮被带走。',c:['通知','建议','规定','介绍'],a:1,g:['notify','suggest','stipulate','introduce'],t:'建议',m:'提出供别人参考的办法',e:'making a suggestion'},
  {s:'2022 · 年终试卷',p:'毕业后，大家应该经常举办聚会，____联络。',c:['保持','维持','增强','增进'],a:0,g:['keep','maintain','strengthen','deepen'],t:'保持',m:'使原来的状态继续下去',e:'keeping or maintaining'},
  {s:'2022 · 年终试卷',p:'游客不会错过____的鱼尾狮，或夜晚五光十色的滨海湾花园。',c:['五彩缤纷','闻名于世','人山人海','古色古香'],a:1,g:['colourful','world-famous','crowded','antique-looking'],t:'闻名于世',m:'在世界各地都很有名',e:'world-famous'},
  {s:'2022 · 年终试卷',p:'学生到国外公司实习，也能学习与不同背景的人____。',c:['演讲','问候','沟通','议论'],a:2,g:['give speeches','greet','communicate','discuss critically'],t:'沟通',m:'交换想法、互相了解',e:'communicating'},
  {s:'2023 · 年中试卷',p:'打包好的食物有时不符合家庭的需要，常会出现浪费食物的____。',c:['困难','事情','意外','现象'],a:3,g:['difficulty','matter','accident','phenomenon'],t:'现象',m:'观察得到的情况',e:'observable phenomenon'},
  {s:'2023 · 年中试卷',p:'科学老师常用有趣的故事解释知识。学生觉得他的课____。',c:['与众不同','闻名于世','洋洋得意','出人意料'],a:0,g:['distinctive','world-famous','self-satisfied','unexpected'],t:'与众不同',m:'与其他人或事物不一样',e:'distinctive or different'},
  {s:'2023 · 年中试卷',p:'老师会用自己的经历来____学生努力学习。',c:['促进','乞求','鼓励','通知'],a:2,g:['promote','beg','encourage','notify'],t:'鼓励',m:'给人信心和动力',e:'encouraging'},
  {s:'2023 · 年中试卷',p:'普通垃圾混入回收箱，会____可回收物品被污染而无法回收。',c:['变成','产生','引起','导致'],a:3,g:['become','produce','arouse','cause'],t:'导致',m:'引起某种结果',e:'causing a result'},
  {s:'2024 · 年终试卷',k:'阅读理解',p:'家庭成员互相关怀、互相扶持，家庭便会更健康和谐。温暖的家庭也能给人安全感。',q:'家庭成员怎样做能营造和谐的家庭？',c:['互相关怀和扶持','只关心自己的成绩','减少见面的机会','遇事不与家人沟通'],a:0,g:['care and support','focus on grades','meet less often','avoid communication'],t:'扶持',m:'帮助并支持',e:'supporting or assisting'},
  {s:'2024 · 年终试卷',k:'阅读理解',p:'义心的奶奶上了民众俱乐部的课程，了解手机的基本功能。现在她喜欢用手机看视频。',q:'奶奶如何学会使用手机？',c:['参加相关课程','换了一部手机','请明志代她操作','每天去买新手机'],a:0,g:['attended a course','changed phones','asked Mingzhi','bought phones'],t:'课程',m:'有安排的学习内容',e:'course of study'},
  {s:'2024 · 年终试卷',k:'阅读理解',p:'多元运动学系的学生先接触三种运动。到了四年级，他们才选修一两个感兴趣的项目。',q:'学生什么时候选修自己感兴趣的项目？',c:['入学当天','一年级','二年级','四年级'],a:3,g:['first day','first year','second year','fourth year'],t:'选修',m:'从课程中选择学习',e:'choosing an elective'},
  {s:'2021 · 年中试卷',k:'阅读理解',p:'自然连道让动物在保护区和公园之间自由走动。我国计划把连道从八十公里延伸至一百八十公里。',q:'延长自然连道会让动物得到什么？',c:['更多活动空间','更少的树木','更小的保护区','更多汽车道路'],a:0,g:['more space','fewer trees','smaller reserve','more roads'],t:'延伸',m:'向远处继续伸展',e:'extending'},
  {s:'2021 · 年终试卷',k:'阅读理解',p:'“食物银行”收到没过期的剩余食物后，会统一存放、分类，再捐给有需要的人。',q:'食物银行捐出食物前会怎么处理？',c:['直接丢弃','存放并分类','全部卖给超市','特意购买更多'],a:1,g:['discard','store and sort','sell to shops','buy more'],t:'分类',m:'按照类别分开',e:'sorting into categories'},
  {s:'2022 · 年终试卷',k:'阅读理解',p:'刘佩丝当送餐员，因为工作时间灵活，能在课外赚零用钱。她也把送餐经历画成漫画。',q:'刘佩丝为什么选择送餐工作？',c:['工作时间灵活','不用与顾客接触','能免去画画作业','每天都能免费用餐'],a:0,g:['flexible hours','avoid customers','skip art homework','free meals'],t:'灵活',m:'能随情况调整',e:'flexible'},
  {s:'2022 · 年终试卷',k:'阅读理解',p:'刘佩丝送餐时有顾客送她饮料，也有人留下孩子画的感谢卡。这些暖心举动让她觉得付出值得。',q:'什么让刘佩丝觉得工作值得？',c:['顾客的善意','更长的等待时间','每天都下雨','餐馆减少订单'],a:0,g:['kind customers','longer waits','daily rain','fewer orders'],t:'暖心',m:'让人觉得温暖、感动',e:'heartwarming'},
  {s:'2023 · 年中试卷',k:'阅读理解',p:'王正光觉得舞龙训练很累，但队员们热情友善。他留下来，后来也爱上了这项运动。',q:'王正光为什么决定留在舞龙队？',c:['队员热情友善','训练完全不累','妈妈要求他加入','他从不需要练习'],a:0,g:['friendly teammates','easy training','mother insisted','no practice'],t:'训练',m:'有计划地练习技能',e:'training'},
  {s:'2023 · 年终试卷',k:'阅读理解',p:'疫情期间，阿米尔无法与歌手面对面录音。他选择远程制作歌曲，收到录音后再与歌手沟通调整。',q:'阿米尔为什么采用远程方式制作歌曲？',c:['疫情期间不便见面','他不喜欢录音','歌手住在海上','歌曲不需要歌词'],a:0,g:['pandemic restrictions','disliked recording','singer at sea','no lyrics'],t:'远程',m:'相隔很远而通过通信完成',e:'done from a distance'},
  {s:'2023 · 年终试卷',k:'阅读理解',p:'勿洛码头有人钓到少见的大鱼。国家公园局希望公众遇到濒临绝种的鱼类时放走它们。',q:'钓到濒临绝种的鱼，应该怎样做？',c:['把鱼放走','继续捕捉更多','马上拿去售卖','留作纪念品'],a:0,g:['release it','catch more','sell it','keep as souvenir'],t:'濒临绝种',m:'接近完全灭绝',e:'near extinction'}
];
const memoryDistractors = [
  ['把东西送回原处','return an item'], ['使数量减少','reduce an amount'],
  ['表示不同意','express disagreement'], ['只是暂时等待','wait temporarily'],
  ['完全没有变化','remain unchanged'], ['快速离开现场','leave quickly'],
  ['比别人先到达','arrive earlier'], ['把事情忘掉','forget an event']
];
function glossExplanation(gloss, answer) {
  return 'Correct: '+ 'ABCD'[answer]+'. '+gloss.map((v,i)=>'ABCD'[i]+' '+v).join('; ')+'.';
}
const extraPairs = extraRows.map((r,i)=>{
  const wrong=[0,1,2].map(j=>memoryDistractors[(i*3+j)%memoryDistractors.length]);
  const at=i%4, memory=wrong.map(x=>x[1]), memoryGloss=wrong.map(x=>x[1]);
  memory.splice(at,0,r.e);memoryGloss.splice(at,0,r.e);
  return {source:r.s,kind:r.k||'词语应用',passage:r.p,ask:r.q||'哪一个词语最适合填入空格？',choices:r.c,answer:r.a,
    explain:glossExplanation(r.g,r.a),term:r.t,memory,memoryAnswer:at,memoryExplain:glossExplanation(memoryGloss,at)};
});
