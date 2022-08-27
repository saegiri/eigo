let verb_level1 = ['be', 'begin', 'break', 'bring', 'buy', 'build', 'choose', 'come', 'cost', 'cut', 'do', 'draw', 'drive', 'eat', 'feel', 'find', 'get', 'give', 'go', 'have', 'hear', 'hold', 'keep', 'know', 'leave', 'lead', 'let', 'lie', 'lose', 'make', 'mean', 'meet', 'pay', 'put', 'run', 'say', 'sell', 'send', 'set', 'sit', 'speak', 'spend', 'stand', 'take', 'teach', 'tell', 'think', 'understand', 'wear', 'win', 'write'];

let verb_level2 = ["use","like","work","look","seem","place","become","show","need","call","develop","move","begin","turn","want","point","ask","end","open","follow","present","hold","govern","head","consider","face","play","increase","change","help","put","close","force","unite","live","try","provide","continue","study"];

let verb_level3 = ["read", "include", "clear", "expect", "complete", "act", "sense", "mind", "direct", "return", "care", "love", "appear", "believe", "speak", "drive", "concern", "hope", "inform", "understand", "reach", "pass", "fall", "note", "talk", "measure", "walk", "teach", "carry", "remain", "sit", "determine", "receive", "grow", "cause", "serve", "book", "step", "add", "deal", "land", "happen", "agree", "view", "manage", "answer", "break", "organize", "fire", "lose", "wait", "learn", "voice", "air", "cover", "draw", "treat", "produce", "send", "rise", "remember", "test", "fight", "watch", "rest", "bear", "market", "prepare", "explain", "offer", "plant", "charge", "lie"];


let noun_level1 = ["man", "other", "time", "state", "year", "work", "now", "day", "place", "world", "nation", "hand", "show", "house", "both", "need", "call", "last", "right", "move", "thing", "school", "number", "part", "turn", "leave", "want", "point", "form", "child", "home", "interest", "person", "end", "present", "head","word", "program", "problem", "lead", "system", "order", "eye", "face", "fact", "group", "play", "stand", "course", "change", "help", "line", "city", "case", "force", "water", "war", "light", "country", "center", "side", "try", "name", "power", "pay", "result", "question", "study", "woman", "member", "night", "service", "report"];

let noun_level2 = ["something", "company", "week", "church", "room", "figure", "nature", "president", "nothing", "cost", "business", "value", "second", "family", "experience", "art", "car", "law", "industry", "girl", "god", "matter", "reason", "action", "foot", "care", "love", "human", "doctor", "student", "month", "best", "door", "hope", "example", "body", "effect", "idea", "control", "condition", "field", "fall", "note", "talk", "measure", "walk", "hour", "type", "rate", "street", "record", "level", "moment", "spirit", "college", "religion", "music", "age", "book", "board", "sound", "office", "class", "history", "position", "friend", "court", "deal", "tax", "party", "land", "material", "education", "death", "arm", "mother", "anything", "past", "view", "society", "answer", "fire", "money", "stop", "effort", "department", "voice", "air", "subject", "wife", "limit", "road", "letter", "color", "term", "university", "success", "minute", "purpose", "test", "fight", "situation", "south", "difference", "stage", "father", "table", "rest", "market", "offer", "plant", "charge", "ground", "west", "picture"];

let noun_level3 = ["surface", "rule", "regard", "dance", "peace", "future", "wall", "farm", "claim", "firm", "operation", "pressure", "property", "morning", "amount", "outside", "piece", "beauty", "trade", "fear", "demand", "list", "judge", "paint", "mile", "secretary", "heart", "island", "story", "experiment", "stay", "paper", "space", "desire", "sign", "visit", "officer", "doubt", "wish", "horse", "son", "north", "station", "food", "character", "critic", "unit", "product", "respect", "drop", "fine", "trouble", "mark", "press", "attempt", "everything", "committee", "red", "earth", "accord", "remark", "east", "event", "defense", "river", "game", "account", "club", "attention", "decision", "inside", "sale", "park", "vote", "price", "district", "direction", "trial", "practice", "opportunity", "floor", "association", "spring", "stock", "hair", "science", "relation", "profession", "pattern", "influence", "occasion", "machine", "husband", "temperature", "tree", "race", "police", "touch", "quality", "chance", "growth", "date", "heat", "performance", "count", "production", "size", "army", "patient", "summer", "hall", "length", "health", "evening", "store", "language", "degree"];

let verbs = [verb_level1,verb_level2,verb_level3];
let nouns = [noun_level1,noun_level2,noun_level3];


let thetho_verb_level1 = {
    "be": ["stay", "live", "go on", "remain", "quit", "stop", "die", "give up"],
    "begin": ["create", "launch", "open", "set up", "end", "close", "fail", "finish"],
    "break": ["burst", "crash", "damage", "tear", "fix", "join", "obey", "lose"],
    "bring": ["deliver", "carry", "take", "transport", "refuse", "abandon", "leave", "fail"],
    "buy": ["purchase", "acquire", "get", "obtain", "lose", "fail", "sell", "yield"],
    "build": ["make", "manufacture", "produce", "set up", "ruin", "destroy", "demolish", "conclude"],
    "choose": ["elect", "determine", "accept", "adopt", "refuse", "reject", "ignore", "hate"],
    "come": ["arrive", "enter", "become", "show", "leave", "fail", "hide", "miss"],
    "cost": ["come to", "sell for", " require", "take", "ignore", "refuse", "reject", "add"],
    "cut": ["shave", "slice", "rip", "divide", "build", "create", "join", "mend"],
    "do": ["act", "make", "finish", "move", "fail", "give up", "forget", "destroy"],
    "draw": ["bring", "attract", "carry", "pick", "push", "insert", "reject", "plant"],
    "drive": ["chase", "send", "make", "motivate", "stop", "prevent", "discourage", "pull"],
    "eat": ["bite", "chew", "feed", "swallow", "build", "reject", "ignore", "abstain"],
    "feel": ["sense", "perceive", "snese", "perceive", "ignore", "give", "leave", "fail"],
    "find": ["discover", "uncover", "detect", "notice", "avoid", "lose", "leave", "miss"],
    "get": ["gain", "realize", "pick up", "obtain", "fail", "refuse", "give up", "reject"],
    "give": ["provide", "award", "donate", "deliver", "deny", "receive", "take", "neglect"],
    "go": ["move", "pass", "retire", "leave", "stay", "remain", "stop", "wait"],
    "have": ["own", "take", "hold", "keep", "abandon", "deny", "drop", "lack"],
    "hear": ["listen", "catch", "pick up", "get", "ignore", "lose", "neglect", "reject"],
    "hold": ["keep", "own", "have", "carry", "fail", "give", "lack", "release"],
    "keep": ["carry", "retain", "have", "store", "lack", "lose", "remove", "waste"],
    "know": ["learn", "notice", "see", "realize", "forget", "confuse", "overlook", "miss"],
    "leave": ["disappear", "go", "escape", "retire", "arrive", "stay", "join", "hold"],
    "lead": ["drive", "force", "manage", "get", "discourage", "fail", "ignore", "neglect"],
    "let": ["approve", "make", "permit", "give", "disagree", "forbid", "refuse", "reject"],
    "lie": ["mislead", "deceive", "con", "fake", "be honest", "tell truth", "stand", "be upright"],
    "lose": ["drop", "give up", "surrender", "fail", "win", "collect", "fill", "achieve"],
    "make": ["generate", "produce", "form", "manufacture", "break", "destroy", "ruin", "disorganize"],
    "mean": ["say", "suggest", "indicate", "think", "ignore", "fall", "fly", "add"],
    "meet": ["see", "find", "face", "contact", "avoid", "evade", "lose", "miss"],
    "pay": ["give", "devote", "compensate", "offer", "refuse", "keep", "hold", "take"],
    "put": ["set", "bring", "install", "place", "forget", "remove", "leave", "displace"],
    "run": ["move", "jog", "sprint", "operate", "remain", "stay", "walk", "slow"],
    "say": ["answer", "speak", "tell", "state", "listen", "neglect", "be quiet", "hear"],
    "sell": ["trade", "deal", "bargain", "auction", "buy", "hide", "keep", "hold"],
    "send": ["ship", "deliver", "post", "issue", "hold", "stop", "hide", "receive"],
    "set": ["prepare", "post", "put", "install", "change", "displace", "destroy", "move"],
    "sit": ["seat", "park", "rest", "lie", "move", "run", "stand", "go"],
    "speak": ["chat", "say", "tell", "voice", "listen", "be quiet", "hold", "keep"],
    "spend": ["waste", "use", "put in", "donate", "hold", "keep", "save", "build"],
    "stand": ["rise", "put", "place", "locate", "displace", "move", "drop", "fall"],
    "take": ["accept", "pick up", "receive", "hold", "drop", "give", "offer", "spend"],
    "teach": ["advise", "coach", "explain", "lecture", "ignore", "mislead", "neglect", "hide"],
    "tell": ["advise", "explain", "speak", "inform", "hide", "ignore", "be quiet", "keep secret"],
    "think": ["see", "take", "expect", "guess", "overlook", "lose", "reject", "forget"],
    "understand": ["catch", "get", "see", "grasp", "ignore", "miss", "fail", "mistake"],
    "wear": ["get on", "put on", "slip on", "cover", "unwrap", "take off", "disrobe", "hide"],
    "win": ["beat", "achieve", "overcome", "gain", "fail", "lose", "miss", "surrender"],
    "write": ["note", "create", "copy", "draft", "destroy", "ruin", "read", "stop"]};

let thetho_verb_level2 = {
    "use": ["adopt", "accept", "manage", "utilize", "stop", "save", "reject", "neglect"],
    "like": ["love", "admire", "go for", "approve", "scorn", "not care", "refuse", "dislike"],
    "work": ["try", "manage", "do business", "labor", "stop", "idle", "relax", "rest"],
    "look": ["consider", "watch", "notice", "view", "forget", "ignore", "neglect", "overlook"],
    "seem": ["look", "show", "resemble", "appear", "be real", "go", "walk", "lend"],
    "place": ["put", "store", "deposit", "stand", "refuse", "take", "remove", "leave"],
    "become": ["turn into", "grow into", "develope into", "come", "remain", "stay", "walk", "read"],
    "show": ["display", "sell", "exhibit", "reveal", "cover", "hide", "close", "refuse"],
    "need": ["demand", "call for", "wish", "desire", "have", "give", "dislike", "push"],
    "call": ["shout", "phone", "announce", "claim", "listen", "ignore", "cancel", "be quiet"],
    "develop": ["establish", "grow", "progress", "promote", "stop", "decrease", "halt", "end"],
    "move": ["carry", "go", "fly", "leave", "stop", "hold", "keep", "stay"],
    "begin": ["launch", "create", "lead", "go into", "close", "end", "conclude", "lose"],
    "turn": ["twist", "grow", "bend", "become", "stay", "remain", "steady", "calm"],
    "want": ["need", "wish", "choose", "require", "dislike", "hate", "ignore", "neglect"],
    "point": ["suggest", "indicate", "lead", "direct", "deny", "lose", "mislead", "ignore"],
    "ask": ["demand", "request", "call for", "inquire", "answer", "ignore", "reply", "command"],
    "end": ["stop", "close", "conclude", "break up", "advance", "do", "begin", "continue"],
    "open": ["launch", "start", "kick off", "inaguate", "cancel", "close", "end", "finish"],
    "follow": ["chase", "pursue", "go after", "come next", "avoid", "lead", "necledt", "pass over"],
    "present": ["give", "do", "show", "perform", "abandon", "fail", "destroy", "hide"],
    "hold": ["own", "carry", "take", "keep", "give", "lose", "ignore", "release"],
    "govern": ["control", "oversee", "regulate", "supervise", "obey", "serve", "follow", "abandon"],
    "head": ["command", "guide", "lead", "control", "obey", "serve", "follow", "mislead"],
    "consider": ["see", "look at", "recognize", "regard", "forget", "ignore", "neglect", "refuse"],
    "face": ["challenge", "confront", "oppose", "encounter", "assist", "help", "avoid", "support"],
    "play": ["act", "joke", "dance", "carry on", "work", "watch", "listen", "stand"],
    "increase": ["rise", "develop", "build", "enlarge", "lessen", "decrease", "divide", "drop"],
    "change": ["alter", "adjust", "shift", "reform", "remain", "keep", "hold", "continue"],
    "help": ["support", "encourage", "back", "boost", "block", "harm", "refuse", "ignore"],
    "put": ["focus", "place", "insert", "lay", "remove", "take", "forget", "neglect"],
    "close": ["block", "shut", "lock", "bar", "open", "unlock", "release", "allow"],
    "force": ["make", "urge", "drive", "order", "allow", "permit", "free", "aid"],
    "unite": ["join", "link", "meet", "strengthen", "divide", "part", "separate", "disconnect"],
    "live": ["continue", "last", "lead", "remain", "lose", "stop", "die", "quit"],
    "try": ["work", "aim", "seek", "struggle", "forget", "give up", "ignore", "neglect"],
    "provide": ["produce", "give", "serve", "contribute", "deny", "ignore", "neglect", "refuse"],
    "continue": ["last", "go on", "maintain", "stay", "quit", "end", "finish", "leave"],
    "study": ["examine", "think", "read", "learn", "forget", "ignore", "neclect", "play"]
};

let thetho_verb_level3 = {
 "read": ["scan", "view", "announce", "say", "write", "forget", "hide", "ignore"],
 "include": ["add", "build", "hold", "enter", "divide", "fail", "lack", "decrease"],
 "clear": ["erase", "open", "eliminate", "free", "dirty", "fill", "clutter", "load"],
 "expect": ["forecast", "predict", "suppose", "take", "neglect", "ignore", "disbelieve", "distrust"],
 "complete": ["accomplish", "finish", "achieve", "end", "create", "begin", "start", "open"],
 "act": ["begin", "do", "carry out", "move", "destroy", "fail", "give up", "stop"],
 "sense": ["feel", "perceive", "grasp", "realize", "miss", "lose", "neglect", "forget"],
 "mind": ["notice", "care for", "recall", "follow", "ignore", "forget", "neglect", "miss"],
 "direct": ["lead", "control", "guide", "conduct", "obey", "serve", "submit", "leave"],
 "return": ["come back", "give", "react", "announce", "hide", "leave", "keep", "go"],
 "care": ["watch", "pay attention to", "protect", "nurse", "dislike", "ignore", "neglect", "hurt"],
 "love": ["prefer", "worship", "admire", "care for", "dislike", "hate", "criticize", "condemn"],
 "appear": ["come out", "emerge", "show", "turn out", "go", "hide", "leave", "miss"],
 "believe": ["accept", "expect", "suppose", "take", "forget", "ignore", "reject", "distrust"],
 "speak": ["chat", "deliver", "tell", "say", "keep", "hold", "listen", "hide"],
 "drive": ["ride", "make", "steer", "cruise", "stand", "stay", "stop", "walk"],
 "concern": ["worry", "interest", "involve", "worry", "ignore", "aid", "calm", "please"],
 "hope": ["wish", "believe", "expect", "desire", "doubt", "fear", "despair", "disbelieve"],
 "inform": ["tell", "update", "teach", "instruct", "hiode", "mislead", "keep secret", "be quiet"],
 "understand": ["figure out", "grasp", "get ", "see", "fail", "ignore", "miss", "lose"],
 "reach": ["arrive", "land", "contact", "achieve", "fail", "lose", "miss", "leave"],
 "pass": ["carry", "go by", "skip", "deliver", "live", "attend", "increase", "respect"],
 "fall": ["go down", "decrease", "sink", "diminish", "ascend", "expand", "go up", "grow"],
 "note": ["remark", "notice", "view", "see", "ignore", "neglect", "lose", "miss"],
 "talk": ["chat", "say", "speak", "tell", "listen", "hide", "refuse", "be quiet"],
 "measure": ["check", "estimate", "assess", "survey", "ignore", "neglect", "rest", "sleep"],
 "walk": ["go", "hike", "step", "trek", "stay", "stop", "remain", "rest"],
 "teach": ["show", "lecture", "coach", "explain", "hide", "mislead", "ignore", "learn"],
 "carry": ["lift", "bring", "pack", "convey", "drop", "receive", "refuse", "fail"],
 "remain": ["last", "continue", "stand", "wait", "die", "go", "leave", "move"],
 "sit": ["park", "lie", "rest", "relax", "depart", "move", "go", "stand"],
 "determine": ["decide", "check", "find", "measure", "destroy", "ignore", "doubt", "hesitate"],
 "receive": ["get", "gain", "accept", "pick up", "give", "lose", "miss", "offer"],
 "grow": ["mature", "age", "come", "increase", "drop", "decrease", "destroy", "lose"],
 "cause": ["lead to", "produce", "generate", "begin", "keep", "destroy", "hide", "cover"],
 "serve": ["deliver", "give", "provide", "present", "refuse", "receive", "take", "keep"],
 "book": ["hire", "organize", "set up", "reserve", "neglect", "cancel", "refuse", "reject"],
 "step": ["walk", "stride", "go down", "tiptoe", "stay", "stop", "fly", "swim"],
 "add": ["count", "include", "boost", "increase", "subtract", "reduce", "remove", "decrease"],
 "deal": ["handle", "trade", "sell", "negotiate", "refuse", "deny", "leave", "reject"],
 "land": ["settle", "touch down", "arrive", "ground", "ascend", "fly", "swim", "take off"],
 "happen": ["take place", "arise", "result", "take place", "stop", "miss", "stay", "lose"],
 "agree": ["sign", "admit", "acknowledge", "settle", "deny", "disapprove", "oppose", "protest"],
 "view": ["consider", "see", "examine", "explore", "ignore", "forget", "miss", "neglect"],
 "manage": ["achieve", "carry out", "deal with", "arrange", "fail", "forget", "ignore", "neglect"],
 "answer": ["return", "solve", "respond", "reply", "ask", "leave", "request", "ignore"],
 "break": ["crash", "damage", "separate", "burst", "fix", "mend", "connect", "join"],
 "organize": ["form", "set up", "establish", "run", "break", "destroy", "ruin", "ignore"],
 "fire": ["shoot", "launch", "explode", "shoot", "hire", "hold", "employ", "keep"],
 "lose": ["drop", "fail", "forget", "give up", "win", "achieve", "succeed", "save"],
 "wait": ["await", "stay", "remain", "stand by", "go", "do", "move", "leave"],
 "learn": ["discover", "find out", "gain", "understand", "ignore", "miss", "teach", "lose"],
 "voice": ["announce", "tell", "say", "speak", "hide", "listen", "be quiet", "neglect"],
 "air": ["open", "broadcast", "publish", "display", "listen", "hide", "miss", "conceal"],
 "cover": ["protect", "wrap", "veil", "coat", "show", "reveal", "open", "tell out"],
 "draw": ["write", "pick", "paint", "attract", "refuse", "reject", "lose", "keep"],
 "treat": ["deal with", "conduct", "serve", "care for", "ignore", "neglect", "receive", "refuse"],
 "produce": ["construct", "make", "manufacture", "build", "break", "destroy", "kill", "ruin"],
 "send": ["deliver", "ship", "issue", "post", "stop", "keep", "hold", "hide"],
 "rise": ["lift", "grow", "climb", "go up", "drop", "decrease", "divide", "go down"],
 "remember": ["remind", "look back", "learn", "recall", "forget", "miss", "leave", "ignore"],
 "test": ["check", "assess", "analyze", "confirm", "ignore", "neglect", "hide", "leave"],
 "fight": ["attack", "battle", "challenge", "combat", "surrender", "give up", "leave", "forget"],
 "watch": ["examine", "observe", "keep an eye on", "follow", "ignore", "avoid", "forget", "neglect"],
 "rest": ["relax", "sit down", "settle", "pause", "do", "move", "carry out", "run"],
 "bear": ["create", "produce", "provide", "breed", "destroy", "ruin", "stop", "refuse"],
 "market": ["advertise", "display", "retail", "exchange", "buy", "hide", "ignore", "neglect"],
 "prepare": ["arrange", "make", "produce", "ready", "destroy", "neglect", "forget", "break"],
 "explain": ["tell", "point out", "describe", "demonstrate", "ignore", "hide", "forget ", "stop"],
 "offer": ["show", "suggest", "propose", "submit", "deny", "refuse", "reject", "ignore"],
 "plant": ["establish", "set", "bury", "farm", "reduce", "decrease", "harvest", "abandon"],
 "charge": ["blame", "attack", "ask", "impose", "pay", "answer", "reply", "help"],
 "lie": ["mislead", "rest", "exist", "be", "move", "be honest", "run", "make"]};

let thethourus_verb = [thetho_verb_level1,thetho_verb_level2,thetho_verb_level3];

let thetho_noun_level1 = {
    "man": ["brother", "father", "husband", "guy", "sister", "mother", "girl", "woman"],
    "other": ["new", "else", "extra", "more", "same", "related", "similar", "included"],
    "time": ["age", "date", "day", "era", "space", "sky", "line", "point"],
    "state": ["case", "shape", "status", "outlook", "book", "building", "game", "school"],
    "year": ["period", "class", "limit", "range", "pen", "key", "water", "potato"],
    "work": ["effort", "task", "attempt", "performance", "fun", "pastime", "entertainment", "laziness"],
    "now": ["today", "at this time", "in a moment", "right away", "later", "future", "eventually", "past"],
    "day": ["light", "sunshine", "bright", "sunlight", "darkness", "night", "evening", "midnight"],
    "place": ["corner", "spot", "area", "country", "clock", "book", "speaker", "pencil"],
    "world": ["earth", "globe", "universe", "ground", "pc", "tape", "nose", "water"],
    "nation": ["society", "state", "country", "land", "village", "light", "house", "table"],
    "hand": ["fist", "paw", "palm", "grip", "watch", "kick", "cry", "read"],
    "life": ["spirit", "breath", "vitality", "vigor", "", "", "", ""],
    "show": ["exhibition", "demonstration", "exposition", "display", "shirt", "pen", "book", "orange"],
    "house": ["dwelling", "residence", "condo", "home", "office", "school", "cup", "sky"],
    "both": ["the couple", "the two", "the pair", "one and the other", "one", "sun", "another", "other"],
    "need": ["demand", "want", "requisit", "essential", "plenty", "luxury", "riches", "wealth"],
    "call": ["signal", "alarm", "cry", "shout", "wall", "tall", "stall", "mall"],
    "last": ["conclusion", "ending", "finale", "completion", "beginning", "start", "way", "distance"],
    "right": ["authority", "power", "license", "claim", "injustice", "corruption", "wrong", "unfairness"],
    "move": ["motion", "step", "measure", "action", "idleness", "rest", "stagnation", "inaction"],
    "thing": ["fact", "item", "matter", "stuff", "abstract", "think", "thin", "thick"],
    "school": ["adademy", "university", "institution", "college", "war", "hazard", "accident", "mountain"],
    "number": ["figure", "count", "sum", "total", "part", "letter", "color", "book"],
    "part": ["piece", "section", "element", "member", "total", "whole", "unity", "agreement"],
    "turn": ["corner", "shift", "trend", "round", "stagnation", "inability", "failure", "miss"],
    "leave": ["authorization", "allowance", "permit", "okay", "refusal", "limitation", "prohibition", "disapproval"],
    "want": ["need", "wish", "demand", "hunger", "dislike", "enough", "abundance", "indifference"],
    "point": ["mark", "stop", "dot", "period", "whole", "lot", "line", "circle"],
    "form": ["plan", "design", "style", "structure", "disorder", "shapelessness", "disorganization", "disarrangement"],
    "child": ["kid", "teenager", "youth", "youngster", "adult", "parent", "father", "mother"],
    "home": ["apartment", "house", "cottage", "residence", "office", "work", "factory", "school"],
    "interest": ["concern", "stake", "passion", "importance", "indifference", "ignorance", "labor", "insignificance"],
    "person": ["guy", "human", "individual", "somebody", "animal", "bird", "fish", "plant"],
    "end": ["deadline", "edge", "tail", "borderline", "beginning", "birth", "start", "origin"],
    "present": ["gift", "donation", "giveaway", "offering", "loss", "failure", "ignorance", "neglect"],
    "head": ["brain", "chief", "boss", "mind", "bottom", "foot", "end", "lack"],
    "word": ["information", "talk", "message", "promise", "quiet", "listening", "ignorance", "silence"],
    "program": ["plan", "schedule", "business", "scheme", "ignorance", "neglect", "accident", "failure"],
    "problem": ["issue", "trouble", "question", "obstacle", "help", "solution", "assistance", "advantage"],
    "lead": ["advantage", "margin", "top", "clue", "last", "interior", "center", "disadvantage"],
    "system": ["organization", "scheme", "structure", "procedure", "disorder", "part", "disorganization", "ignorance"],
    "order": ["rule", "law", "command", "request", "chaos", "violence", "noise", "dishonesty"],
    "eye": ["view", "belief", "mind", "opinion", "foot", "nose", "ear", "hand"],
    "face": ["look", "aspect", "mask", "surface", "back", "ignorance", "behind", "rear"],
    "fact": ["case", "matter", "event", "evidence", "lie", "theory", "concept", "abstract"],
    "group": ["party", "society", "gathering", "crowd", "individual", "one", "divide", "separate"],
    "play": ["game", "match", "action", "activity", "inaction", "labor", "pain", "melancholy"],
    "stand": ["attitude", "stance", "belief", "table", "ignorance", "neglect", "failure", "movement"],
    "course": ["plan", "way", "program", "line", "disorder", "disorganization", "inaction", "indifference"],
    "change": ["shift", "switch", "transition", "innovation", "similarity", "stagnation", "inaction", "ignorance"],
    "help": ["aid", "hand", "support", "advice", "obstraction", "prevention", "handicap", "stop"],
    "line": ["row", "channel", "boundary", "border", "disorder", "failure", "disorganization", "part"],
    "city": ["downtown", "capital", "metropolis", "municipality", "country", "world", "space", "earth"],
    "case": ["situation", "condition", "example", "lawsuits", "cash", "cast", "cat", "camera"],
    "force": ["army", "troop", "capability", "strength", "happiness", "weakness", "relaxation", "idleness"],
    "water": ["drink", "rain", "H20", "tears", "food", "rock", "soil", "grass"],
    "war": ["battle", "combat", "confrict", "fighting", "truce", "peace", "harmony", "friendship"],
    "light": ["bulb", "flash", "sunshine", "candle", "darkness", "sunset", "night", "obscurity"],
    "country": ["region", "public", "land", "society", "sky", "plant", "building", "office"],
    "center": ["heart", "core", "hub", "market", "edge", "boundary", "rim", "outside"],
    "side": ["part", "border", "front", "sector", "whole", "middle", "center", "interior"],
    "try": ["shot", "bid", "effort", "go", "ignorance", "neglect", "idleness", "laziness"],
    "name": ["brand", "personality", "label", "reputation", "failure", "ignorance", "indifference", "unknown"],
    "power": ["capability", "skill", "force", "energy", "laziness", "weakness", "inability", "impotence"],
    "pay": ["income", "salaly", "reward", "profit", "score", "number", "sum", "loss"],
    "result": ["outcome", "consequence", "conclusion", "product", "origin", "opening", "introduction", "source"],
    "question": ["dispute", "problem", "difficulty", "subject", "agreement", "answer", "replay", "harmony"],
    "study": ["research", "subject", "course", "survey", "ignorance", "neglect", "idleness", "laziness"],
    "woman": ["aunt", "mother", "wife", "grandmother", "man", "father", "uncle", "grandfather"],
    "member": ["representative", "associate", "branch", "division", "enemy", "oponent", "foe", "whole"],
    "night": ["nightfall", "evening", "midnight", "darkness", "day", "daytime", "morning", "daybreak"],
    "service": ["work", "business", "assistance", "supply", "loss", "unemployment", "damage", "injury"],
    "report": ["paper", "record", "information", "news", "ignorance", "silence", "concealment", "quiet"]};

let thetho_noun_level2 = {
    "something": ["object", "thing", "being", "commodity", "nothing", "anything", "everything", "both"],
"company": ["party", "team", "firm", "community", "individual", "one", "employee", "employer"],
"week": ["day", "month", "hour", "date", "place", "park", "office", "school"],
"church": ["chapel", "temple", "mosque", "shrine", "field", "hill", "mountain", "river"],
"room": ["area", "place", "chance", "capacity", "refusal", "rejection", "outside", "car"],
"figure": ["image", "number", "model", "personality", "nobody", "letter", "system", "feeling"],
"nature": ["personality", "world", "character", "environment", "car", "factory", "train", "industry"],
"president": ["CEO", "leader", "boss", "person in charge", "employee", "staff", "worker", "soldier"],
"nothing": ["nobody", "void", "blank", "zero", "something", "being", "existence", "essence"],
"cost": ["expenditure", "expense", "price", "loss", "aid", "interest", "benefit", "gain"],
"business": ["trade", "work", "market", "deal", "recreation", "holiday", "unemployment", "hobby"],
"value": ["importance", "meaning", "quality", "content", "loss", "weakness", "insignificance", "unimportance"],
"second": ["moment", "sec", "double", "helper", "opponent", "enemy", "eternity", "infinity"],
"family": ["household", "clan", "folk", "house", "stranger", "others", "enemy", "opponent"],
"experience": ["know-how", "background", "skill", "contact", "neglect", "immaturity", "inexperience", "unfamiliarity"],
"art": ["deed", "operation", "step", "action", "idleness", "inactivity", "failure", "rest"],
"car": ["auto", "automobile", "motor", "ride", "passenger", "plane", "ship", "train"],
"law": ["act", "rule", "order", "regulation", "violation", "breaking", "end", "effect"],
"industry": ["business", "trade", "production", "management", "idleness", "laziness", "individual", "home"],
"girl": ["daughter", "young woman", "Ms", "she", "boy", "young boy", "Mr", "he"],
"god": ["creator", "divinity", "holiness", "almighty", "Christian", "muslim", "buddhist", "supporter"],
"matter": ["element", "material", "thing", "importance", "nothing", "zero", "insignificance", "unimportance"],
"reason": ["logic", "cause", "motivation", "grounds", "laziness", "block", "result", "procedure"],
"action": ["activity", "movement", "reaction", "operation", "failure", "inaction", "idleness", "rest"],
"foot": ["paw", "pad", "hoof", "feet", "hand", "arm", "neck", "back"],
"care": ["responsibility", "protection", "control", "trust", "neglect", "inattention", "ignorance", "disregard"],
"love": ["fondness", "dearest", "lover", "passion", "enemy", "hatred", "foe", "dislike"],
"human": ["creature", "child", "individual", "being", "plant", "car", "TV", "building"],
"doctor": ["physician", "surgeon", "doc", "medic", "patient", "nurse", "police officer", "firefighter"],
"student": ["graduate", "junior", "pupil", "undergraduate", "teacher", "professor", "tutor", "lecturer"],
"month": ["age", "date", "era", "hour", "place", "tree", "cup", "pen"],
"best": ["choice", "favorite", "top", "first", "worst", "bottom", "last", "insignificance"],
"door": ["exit", "gate", "entry", "opening", "window", "wall", "ceiling", "roof"],
"hope": ["wish", "desire", "ambition", "expectation", "fear", "hatred", "reality", "fact"],
"example": ["model", "case", "pattern", "kind", "horse", "dog", "cat", "cow"],
"body": ["material", "torso", "frame", "corpse", "concept", "mind", "sprit", "thought"],
"effect": ["outcome", "response", "influence", "action", "failure", "beginnning", "origin", "cause"],
"idea": ["concept", "notion", "meaning", "theory", "reality", "thing", "body", "rock"],
"control": ["rule", "regulation", "restriction", "authority", "chaos", "freedom", "lawlessness", "disorganization"],
"condition": ["health", "status", "qualification", "situation", "ignorance", "result", "laziness", "condo"],
"field": ["ground", "green", "farmland", "garden", "sky", "rock", "river", "hill"],
"fall": ["decline", "drop", "recession", "slump", "ascent", "rise", "success", "increase"],
"note": ["attention", "heed", "sign", "tone", "ignorance", "neglect", "pencil", "eraser"],
"talk": ["iterview", "meeting", "negotiation", "discussion", "listening", "silence", "laziness", "inaction"],
"measure": ["meter", "evaluation", "method", "step", "inaction", "laziness", "idleness", "ignorance"],
"walk": ["hike", "step", "parade", "course", "hobby", "fun", "work", "rain"],
"hour": ["date", "time", "minute", "period", "space", "room", "place", "sound"],
"type": ["variety", "sort", "kind", "example", "pipe", "tape", "idea", "note"],
"rate": ["amount", "pace", "figure", "estimate", "whole", "reason", "body", "control"],
"street": ["avenue", "route", "track", "lane", "car", "taxi", "park", "museum"],
"record": ["document", "file", "background", "report", "family", "government", "office", "sports"],
"level": ["height", "degree", "grade", "standard", "sea", "child", "sky", "peace"],
"moment": ["time", "date", "point", "hour", "place", "park", "school", "tree"],
"spirit": ["will", "courage", "heart", "life", "fear", "weakness", "idleness", "indifference"],
"college": ["university", "institute", "organization", "seminary", "park", "museum", "factory", "apartment"],
"religion": ["church", "myth", "ritual", "prayer", "disbelief", "fact", "reality", "neglect"],
"music": ["melody", "opera", "piece", "tune", "silence", "talk", "speech", "discussion"],
"age": ["life", "era", "date", "day", "sky", "sea", "field", "mountain"],
"book": ["copy", "writing", "text", "novel", "pen", "eraser", "pencil", "writer"],
"board": ["panel", "cabinet", "committee", "jury", "individual", "one", "window", "driver"],
"sound": ["music", "harmony", "note", "tone", "silence", "frog", "rock", "pond"],
"office": ["work", "department", "agency", "center", "home", "house", "park", "library"],
"class": ["grade", "seminar", "course", "sbuject", "teacher", "professor", "lecturer", "student"],
"history": ["past", "record", "story", "tale", "future", "today", "now", "tomorrow"],
"position": ["location", "spot", "viewpoint", "stance", "time", "number", "letter", "telephone"],
"friend": ["colleague", "buddy", "ally", "classmate", "enemy", "foe", "strange", "opponent"],
"court": ["coutyard", "judge", "justice", "courthouse", "apple", "orange", "vegetable", "grape"],
"deal": ["contract", "transaction", "appointment", "game", "walk", "sweet", "water", "fish"],
"tax": ["levy", "duty", "cost", "contribution", "aid", "help", "pleasure", "advantage"],
"party": ["dinner", "company", "team", "gathering", "individual", "one", "person", "shop"],
"land": ["earth", "country", "area", "home", "sky", "sea", "space", "river"],
"material": ["goods", "element", "object", "stuff", "concept", "idea", "notion", "thought"],
"education": ["literacy", "discipline", "improvement", "study", "destruction", "laziness", "ignorance", "labor"],
"death": ["end", "passing", "exit", "tomb", "birth", "start", "life", "living"],
"arm": ["power", "force", "branch", "division", "leg", "weakness", "foot", "war"],
"mother": ["mom", "mommy", "parent", "ancestor", "child", "daughter", "son", "cousin"],
"anything": ["all", "everything", "whatever", "all", "nothing", "zero", "void", "blank"],
"past": ["history", "yesterday", "time gone by", "old times", "future", "present", "today", "now"],
"view": ["look", "vision", "sight", "picture", "blindness", "darkness", "privacy", "secrecy"],
"society": ["community", "public", "world", "company", "individual", "person", "man", "woman"],
"answer": ["response", "solution", "statement", "comment", "problem", "question", "silence", "request"],
"fire": ["flames", "heat", "attack", "light", "coldness", "apathy", "calmness", "coolness"],
"money": ["bill", "cash", "pay", "fund", "goods", "product", "produce", "stock"],
"stop": ["bar", "block", "pause", "barricade", "aid", "help", "assistance", "advance"],
"effort": ["struggle", "attempt", "endeavor", "exercise", "laziness", "idleness", "relaxation", "entertainment"],
"department": ["agency", "bureau", "division", "office", "library", "museum", "cafe", "restaurant"],
"voice": ["expression", "view", "speech", "sound", "silence", "peace", "sleep", "rest"],
"air": ["breath", "mood", "atmosphere", "tone", "water", "soil", "iron", "rock"],
"subject": ["topic", "theme", "issue", "matter", "agreement", "objection", "environment", "poverty"],
"wife": ["partner", "spouse", "bride", "companion", "enemy", "foe", "husband", "child"],
"limit": ["cap", "deadline", "maximum", "ceiling", "inifinity", "opening", "beginning", "inside"],
"road": ["avenue", "line", "street", "way", "park", "car", "building", "shop"],
"letter": ["answer", "memo", "message", "reply", "number", "speech", "telephone", "meeting"],
"color": ["red", "yellow", "green", "blue", "number", "letter", "line", "point"],
"term": ["lnaguage", "word", "duration", "time", "bird", "dog", "cat", "tiger"],
"university": ["academy", "college", "school", "institution", "office", "factory", "company", "stadium"],
"success": ["win", "victory", "achievement", "advance", "defeat", "loss", "failure", "sadness"],
"minute": ["moment", "second", "short time", "min", "eternity", "history", "diary", "clock"],
"purpose": ["aim", "target", "goal", "objective", "laziness", "idleness", "entertainment", "game"],
"test": ["trial", "search", "experiment", "inspection", "result", "conclusion", "insight", "data"],
"fight": ["combat", "war", "riot", "bout", "truce", "friendship", "kindness", "peace"],
"situation": ["circumstance", "status", "place", "job", "math", "science", "politics", "economics"],
"south": ["north", "east", "west", "north-west", "minute", "second", "month", "year"],
"difference": ["change", "contrast", "diversity", "variation", "equality", "harmony", "similality", "sameness"],
"stage": ["phase", "step", "theater", "scene", "actor", "musician", "performer", "player"],
"father": ["dad", "parent", "daddy", "ancestory", "mother", "son", "daugther", "aunt"],
"table": ["stand", "counter", "desk", "board", "window", "ceiling", "roof", "wall"],
"rest": ["vacation", "break", "others", "ease", "work", "go", "start", "labor"],
"market": ["grocery", "mart", "market place", "securities industry", "museum", "library", "park", "mountain"],
"offer": ["action", "attempt", "bid", "proposition", "refusal", "idleness", "denial", "withdrawal"],
"plant": ["flower", "grass", "herb", "tree", "car", "train", "ship", "airplane"],
"charge": ["price", "expence", "complaint", "attack", "praise", "compliment", "cheer", "thanks"],
"ground": ["field", "park", "sand", "soil", "sea", "ocean", "river", "lake"],
"west": ["east", "south", "north", "south-west", "century", "month", "year", "week"],
"picture": ["drawing", "sketch", "print", "painting", "number", "letter", "sentence", "character"]};

let thetho_noun_level3 = {
    "surface": ["face", "area", "skin", "exterior", "core", "inside", "middle", "center"],
    "rule": ["order", "guideline", "law", "regulation", "release", "liberation", "discharge", "freedom"],
    "regard": ["view", "care", "approval", "respect", "dishonor", "disrespect", "opposition", "ignorance"],
    "dance": ["disco", "prom", "ball", "tango", "read", "write", "stop", "stay"],
    "peace": ["friendship", "love", "tranquility", "harmony", "agitation", "fighting", "upset", "frustration"],
    "future": ["fate", "destiny", "outlook", "prospect", "past", "history", "yesterday", "today"],
    "wall": ["barrier", "block", "barricade", "fence", "aid", "freedom", "help", "door"],
    "farm": ["field", "lawn", "meadow", "garden", "office", "sky", "space", "galaxy"],
    "claim": ["request", "petition", "request", "demand", "answer", "reply", "denial", "response"],
    "firm": ["company", "corporation", "enterprise", "organization", "individual", "worker", "employee", "laborer"],
    "operation": ["action", "movement", "process", "work", "rest", "inaction", "laziness", "inactivity"],
    "pressure": ["burden", "tension", "load", "strain", "relaxation", "peace", "pleasure", "relief"],
    "property": ["goods", "wealth", "worth", "ownership", "tariff", "tax", "expense", "charge"],
    "morning": ["dawn", "AM", "daybreak", "daylight", "night", "darkness", "sunset", "midnight"],
    "amount": ["volume", "load", "chunk", "lot", "nothing", "blank", "zero", "emptiness"],
    "outside": ["exterior", "outdoors", "surface", "front", "indoors", "inside", "interior", "center"],
    "piece": ["item", "sample", "example", "portion", "whole", "gross", "all", "entity"],
    "beauty": ["charm", "good looks", "refinement", "elegance", "ugliness", "crudeness", "roughness", "homeliness"],
    "trade": ["business", "commerce", "deal", "exchange", "pastime", "vacation", "holiday", "hobby"],
    "fear": ["horror", "scare", "terror", "anxiety", "joy", "calmness", "comfort", "courage"],
    "demand": ["claim", "call", "order", "need", "answer", "offer", "reply", "response"],
    "list": ["archive", "lineup", "menu", "inventory", "name", "id", "item", "age"],
    "judge": ["court", "justice", "authority", "referee", "player", "defendant", "suspect", "offender"],
    "paint": ["color", "oil", "dye", "wax", "river", "mountain", "tree", "apple"],
    "mile": ["meter", "feet", "inch", "kilometer", "second", "minute", "hour", "pound"],
    "secretary": ["clerk", "assistant", "receptionist", "executive secretary", "CEO", "president", "boss", "top"],
    "heart": ["soul", "love", "feeling", "character", "head", "hatred", "outside", "dislike"],
    "island": ["isle", "islet", "archipelago", "peninsula", "forest", "mountain", "river", "hill"],
    "story": ["fiction", "tale", "book", "novel", "truth", "non-fiction", "fact", "law"],
    "experiment": ["study", "search", "research", "examination", "baseball", "basuketball", "volleyball", "golf"],
    "stay": ["holiday", "vacation", "break", "stop", "go", "start", "leave", "advance"],
    "paper": ["news", "journal", "script", "report", "scissors", "rock", "clippers", "stapler"],
    "space": ["area", "territory", "zone", "capacity", "doll", "puppet", "manikin", "model"],
    "desire": ["ambition", "wish", "hunger", "aspiration", "apathy", "disinterest", "indifference", "satisfaction"],
    "sign": ["clue", "signal", "symbol", "symptom", "car", "bus", "truck", "van"],
    "visit": ["stay", "talk", "stopover", "stop", "go", "leave", "start", "beginning"],
    "officer": ["agent", "official", "deputy", "civil servant", "employee", "slave", "witch", "wizard"],
    "doubt": ["distrust", "disbelief", "mistrust", "suspicion", "belief", "faith", "trust", "confidence"],
    "wish": ["longing", "aspiration", "ambition", "hope", "hatred", "dislike", "apathy", "indifference"],
    "horse": ["stallion", "pony", "mare", "mustang", "cat", "dog", "bird", "lion"],
    "son": ["boy", "heir", "offspring", "descendant", "daugter", "father", "mother", "ancestor"],
    "north": ["south", "west", "east", "northward", "hospital", "hotel", "inn", "motel"],
    "station": ["terminal", "location", "site", "house", "machine", "accessory", "device", "gadget"],
    "food": ["bread", "cuisine", "meal", "meat", "starvation", "famine", "need", "malnutrition"],
    "character": ["aspect", "personality", "type", "kind", "stole", "scarf", "time", "shawl"],
    "critic": ["judge", "expert", "reviewer", "authority", "amateur", "praiser", "complimenter", "beginner"],
    "unit": ["group", "component", "member", "block", "whole", "entirety", "all", "gross"],
    "product": ["merchandise", "output", "commodity", "fruit", "loss", "resource", "origin", "start"],
    "respect": ["appreciation", "esteem", "regard", "aspect", "disregard", "disrespect", "disfavor", "criticism"],
    "drop": ["fall", "cut", "downturn", "slump", "ascent", "rise", "success", "increase"],
    "fine": ["punishment", "punishment", "punishment", "punishment", "award", "reward", "trophy", "scholarship"],
    "trouble": ["concern", "suffering", "difficulty", "problemn", "harmony", "joy", "happiness", "pleasure"],
    "mark": ["record", "symbol", "stamp", "goal", "custom", "habit", "routine", "obsession"],
    "press": ["journalist", "reporter", "writer", "media", "actor", "celebrity", "actress", "singer"],
    "attempt": ["try", "bid", "attack", "shot", "surrender", "laziness", "idleness", "inaction"],
    "everything": ["all", "lot", "business", "all", "nothing", "zero", "blank", "emptiness"],
    "committee": ["board", "jury", "commission", "council", "individual", "one", "", ""],
    "red": ["rose", "wine", "crimson", "flaming", "blue", "white", "black", "yellow"],
    "earth": ["globe", "planet", "soil", "ground", "sky", "human", "factory", "library"],
    "accord": ["harmony", "agreement", "tune", "conformity", "dispute", "clash", "contradict", "conflict"],
    "remark": ["comment", "note", "reflection", "attention", "ignorance", "silence", "negligence", "disregard"],
    "east": ["west", "south", "north", "north-west", "apricot", "carrot", "peach", "tangerine"],
    "event": ["accident", "case", "occation", "affair", "stagnation", "refusal", "plan", "inactivity"],
    "defense": ["guard", "shield", "protection", "shelter", "betrayal", "surrender", "offense", "attack"],
    "river": ["stream", "branch", "run", "estuary", "mountain", "hill", "cliff", "lake"],
    "game": ["play", "match", "round", "competition", "destruction", "elimination", "eradication", "extinction"],
    "account": ["explanation", "report", "record", "charge", "glass", "bottle", "cup", "jar"],
    "club": ["association", "union", "clubhouse", "lodge", "hawk", "eagle", "owl", "sparrow"],
    "attention": ["consideration", "awareness", "regard", "spotlight", "ignorance", "negligence", "disregard", "heedlessness"],
    "decision": ["choice", "determination", "selection", "judgement", "refusal", "delay", "waveriing", "potsponement"],
    "inside": ["interior", "innards", "center", "heart", "outside", "exterior", "periphery", "exteriority"],
    "sale": ["deal", "purchase", "trade", "transaction", "resource", "capital", "meanse", "ability"],
    "park": ["forest", "garden", "lawn", "playground", "bar", "diner", "inn", "coffee shop"],
    "vote": ["ballot", "choice", "poll", "referendum", "arena", "cinema", "movie", "drama"],
    "price": ["cost", "expence", "bill", "fare", "boutique", "store", "supermarket", "showroom"],
    "district": ["region", "section", "department", "neighborhood", "police", "detective", "law enforcement", "cop"],
    "direction": ["control", "guidance", "leadership", "order", "abandonment", "submission", "resignation", "abdication"],
    "trial": ["effort", "struggle", "case", "lawsuit", "failure", "error", "fault", "slip"],
    "practice": ["drill", "trainning", "experience", "study", "idleness", "laziness", "leisure", "rest"],
    "opportunity": ["chance", "occation", "opening", "room", "closing", "tragedy", "bad luck", "hardship"],
    "floor": ["deck", "carpet", "ground", "mat", "ceiling", "roof", "dome", "canopy"],
    "association": ["corporation", "organization", "society", "federation", "separation", "split", "divorce", "break"],
    "spring": ["bounce", "geyster", "fountain", "impetus", "end", "result", "outcome", "block"],
    "stock": ["fund", "store", "reserve", "inventory", "debt", "bill", "deficit", "liability"],
    "hair": ["sideburn", "wig", "fur", "fiber", "nail", "skin", "elbow", "thumb"],
    "science": ["art", "education", "tecknique", "learning", "politics", "economics", "mathematics", "geometry"],
    "relation": ["connection", "kin", "relationship", "liaison", "opposition", "disunion", "separation", "difference"],
    "profession": ["career", "occupation", "role", "business", "entertainment", "fun", "recreation", "hobby"],
    "pattern": ["method", "type", "sort", "shape", "disorder", "confusion", "mess", "irregularity"],
    "influence": ["force", "pressure", "effect", "reputation", "weakness", "triviality", "unimportance", "inferiority"],
    "occasion": ["incident", "oppotunity", "affair", "opening", "loss", "defeat", "disaster", "fall"],
    "machine": ["gadget", "appliance", "instrument", "machinery", "elephant", "cougar", "puma", "tiger"],
    "husband": ["patrner", "spouse", "companion", "groom", "wife", "child", "mother-in-low", "grandfather"],
    "temperature": ["climate", "condition", "warmth", "heat", "humidity", "dew", "moisture", "dampness"],
    "tree": ["timber", "wood", "forest", "pulp", "flower", "bloom", "blossom", "rose"],
    "race": ["chase", "kind", "contest", "competition", "interruption", "pause", "intrusion", "hiatus"],
    "police": ["detective", "force", "law enforcement", "cop", "shoplifter", "looter", "burglar", "thief"],
    "touch": ["communication", "contact", "feeling", "taste", "lonliness", "solitude", "desolation", "silence"],
    "quality": ["condition", "excellence", "nature", "element", "quantity", "size", "volume", "load"],
    "chance": ["oppotunity", "advantage", "odds", "opening", "bad luck", "closing", "reality", "misfortune"],
    "growth": ["advance", "improvement", "increase", "rise", "decline", "failure", "stagnation", "stop"],
    "date": ["age", "time", "meeting", "apointment", "job", "duty", "work", "labor"],
    "heat": ["fever", "warmth", "excitement", "itensity", "apathy", "chill", "peace", "indifference"],
    "performance": ["achievement", "act", "play", "efficiency", "inaction", "inefficiency", "failure", "idleness"],
    "count": ["poll", "toll", "result", "calculation", "sheep", "goat", "pig", "cow"],
    "production": ["construction", "manufacturing", "creation", "fabrication", "destruction", "ruin", "annhilation", "elmination"],
    "size": ["amount", "volume", "extent", "range", "confidence", "honesty", "loyalty", "fairness"],
    "army": ["squad", "troops", "corps", "unit", "treaty", "accord", "bargain", "agreement"],
    "patient": ["sufferer", "victime", "inmate", "case", "doctor", "nurse", "physician", "surgeon"],
    "summer": ["vacation", "summertime", "heat", "dogdays", "winter", "fall", "spring", "autumn"],
    "hall": ["entrance", "hallway", "lobby", "gallery", "bathroom", "attic", "bedroom", "loft"],
    "length": ["duration", "range", "term", "section", "giraffe", "buffalo", "camel", "elephant"],
    "health": ["well-being", "energy", "fitness", "strength", "illness", "weakness", "sickness", "disease"],
    "evening": ["night", "twilight", "dusk", "sunset", "morning", "noon", "daybreak", "sunshine"],
    "store": ["deli", "shop", "market", "drugstore", "factory", "laboratory", "manufactory", "firm"],
    "language": ["word", "style", "jargon", "vocabulary", "flower", "grass", "bush", "weed"],
    "degree": ["grade", "credit", "amount", "extent", "tomato", "eggplant", "cucumber", "olive"]};

let thethourus_noun = [thetho_noun_level1,thetho_noun_level2,thetho_noun_level3];

let level = 0
let question_num = 0;
let hin = "";
let correct_num = 0;
let q_words;
let cover = document.querySelector(".cover");
let try_again = document.querySelector(".try_again");
let mute_flag = true;

// 品詞を設定する
let hinshis = document.querySelectorAll(".hinshi");
for (let i = 0; i < hinshis.length; i++){
    hinshis[i].addEventListener("click",function(){
        for (let j = 0; j < hinshis.length; j++){
            hinshis[j].classList.remove("checked");
        }
        hinshis[i].classList.add("checked");
        if (hinshis[i].classList.contains('checked')){
            if (i == 0){
                hin = "verb";
            } else if (i == 1){
                hin = "noun";
            }
        }
    });
}

// レベルを設定する
let levels = document.querySelectorAll(".level");
for (let i = 0; i < levels.length; i++){
    levels[i].addEventListener("click",function(){
        for (let j = 0; j < levels.length; j++){
            levels[j].classList.remove("checked");
        }
        levels[i].classList.add("checked");
        if (levels[i].classList.contains("checked")){
            level = i;
        }
    });
}

let ans_num;
// スタートボタンを押したときの動作
let start_btn = document.querySelector(".start");
let start_func = function(){
    cover.style.zIndex  = 0;

    let qword = document.querySelector("#qword");
    if (hin === "verb"){
        q_words = verbs[level];
        thetho = thethourus_verb[level];
    } else if (hin === "noun"){
        q_words = nouns[level];
        thetho = thethourus_noun[level];
    }
    qword.textContent = q_words[question_num];
    let select = document.querySelectorAll(".select");
    let randNum = Math.floor(Math.random()*4);
    ans_num = randNum;
    for (let i = 0; i < select.length; i++){
        if (i == randNum){
            let randNum2 = Math.floor(Math.random()*4);
            select[i].textContent = thetho[qword.textContent][randNum2];
        } else {
            select[i].textContent = thetho[qword.textContent][i+4];
        }
    }
    start_btn.disabled = true;
    start_btn.style.backgroundColor = "grey";
    let now_hin = document.querySelector(".now_hin");
    let now_level = document.querySelector(".now_level");
    let q_num = document.querySelector(".q_num");
    let now_q_num = document.querySelector(".now_q_num");
    let now_c_num = document.querySelector(".now_c_num");
    now_hin.textContent = "品詞: " + hin;
    now_level.textContent =　"レベル: " + (level + 1);
    q_num.textContent =　 "全" + q_words.length + "問";
    now_q_num.textContent =　"第" + (question_num+1) + "問";
    now_c_num.textContent =　"正解数：" + correct_num + "/" + (question_num);
}

start_btn.addEventListener("click",function(){
    start_func();
});

let next_question = function(){
    question_num += 1;
    start_func();
}

let next_level = function(){
    level += 1;
    question_num = 0;
    correct_num = 0;
    start_func();
}


// 問題画面の時の動作
let selects = document.querySelectorAll(".select");
let level_up = document.querySelector(".level_up");
for (let i = 0; i < selects.length; i++){
    selects[i].addEventListener("click", function(){
        cover.style.zIndex = 2;
        if (i === ans_num){
            correct_num += 1;
            if (!mute_flag){
                let audio = new Audio("sounds/seikai.mp3");
                audio.play();
            }
            if (question_num !== q_words.length-1){
                selects[i].style.backgroundColor = "gold";
                setTimeout(() => {
                    selects[i].style.backgroundColor = "rgb(241, 244, 252)";
                    next_question();
                },700);
            } else if (question_num === q_words.length-1 && correct_num >= Math.floor(q_words.length*0.8)){
                selects[i].style.backgroundColor = "gold";
                level_up.style.display = "block";
                setTimeout(() => {
                    level_up.style.display = "none";
                    selects[i].style.backgroundColor = "rgb(241, 244, 252)";
                    next_level();
                },1400);
            } else if (question_num === q_words.length-1 && correct_num < Math.floor(q_words.length*0.8)){
                try_again.style.display = "block";
            }
        } else {
            if (!mute_flag){
                let audio = new Audio("sounds/huseikai.mp3");
                audio.play();
            }
            if (question_num !== q_words.length-1){
                selects[i].style.backgroundColor = "grey";
                setTimeout(() => {
                    selects[i].style.backgroundColor = "rgb(241, 244, 252)";
                    next_question();
                },700);
            } else if (question_num === q_words.length-1 && correct_num >= Math.floor(q_words.length*0.8)){
                selects[i].style.backgroundColor = "grey";
                level_up.style.display = "block";
                setTimeout(() => {
                    level_up.style.display = "none";
                    selects[i].style.backgroundColor = "rgb(241, 244, 252)";
                    next_level();
                },1400);
            } else if (question_num === q_words.length-1 && correct_num < Math.floor(q_words.length*0.8)){
                try_again.style.display = "block";
            }
        }
        
    });
}

// リセットを押したとき
let reset = document.querySelector(".reset");
reset.addEventListener("click", function(){
    location.reload();
});

// try_againを押したときの動作
try_again.addEventListener("click", function(){
    question_num = 0;
    correct_num = 0;
    start_func();
    try_again.style.display = "none";
});


// ミュートを押したときの動作
let mute = document.querySelector('.fa-volume-mute');
let volume_on = document.querySelector('.fa-volume-up');
mute.addEventListener("click", function(){
    volume_on.style.display = "block";
    mute.style.display = "none";
    mute_flag = false;
});

volume_on.addEventListener("click", function(){
    mute.style.display = "block";
    volume_on.style.display = "none";
    mute_flag = true;
});