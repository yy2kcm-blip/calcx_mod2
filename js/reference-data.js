// reference-data.js — 由 tools/extract-reference.mjs 自動產生，請勿手改。
// 內容：上游測試套件 + 我們自己的 base/formula 測試 + 11 個 DSE 程式庫。
export const REFERENCE = {
 "generated": "extract-reference.mjs",
 "categories": {
  "arith": "四則運算",
  "base": "進位制（BASE mode）",
  "function": "科學函數",
  "formula": "內置公式（FMLA）",
  "stat": "統計（SD / REG）",
  "error": "錯誤與邊界",
  "memory": "記憶與重現",
  "fraction": "分數與百分比",
  "mode": "模式與程式",
  "program": "DSE 程式庫"
 },
 "keyLabels": {
  "SHIFT": "SHIFT",
  "ALPHA": "ALPHA",
  "MODE": "MODE",
  "ON": "ON",
  "PROG": "Prog",
  "FMLA": "FMLA",
  "RECIP": "x⁻¹",
  "CUBE": "x³",
  "ABC": "ab/c",
  "SQRT": "√",
  "SQR": "x²",
  "POW": "xʸ",
  "LOG": "log",
  "LN": "ln",
  "NEG": "(−)",
  "DMS": "°′″",
  "HYP": "hyp",
  "SIN": "sin",
  "COS": "cos",
  "TAN": "tan",
  "RCL": "RCL",
  "ENG": "ENG",
  "LPAR": "(",
  "RPAR": ")",
  "COMMA": ",",
  "MPLUS": "M+",
  "DEL": "DEL",
  "AC": "AC",
  "MUL": "×",
  "DIV": "÷",
  "ADD": "+",
  "SUB": "−",
  "DOT": ".",
  "EXP": "EXP",
  "ANS": "Ans",
  "EXE": "EXE",
  "UP": "▲",
  "DOWN": "▼",
  "LEFT": "◀",
  "RIGHT": "▶",
  "N0": "0",
  "N1": "1",
  "N2": "2",
  "N3": "3",
  "N4": "4",
  "N5": "5",
  "N6": "6",
  "N7": "7",
  "N8": "8",
  "N9": "9"
 },
 "entries": [
  {
   "src": "upstream",
   "cat": "arith",
   "title": "括號優先，括號內先計",
   "titleEn": "2×(5+4)−2×(−3)",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "NEG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2*(5+4)-2*[NEG]3=",
   "text": "2 × ( 5 + 4 ) − 2 × (−) 3 EXE",
   "want": "24",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "24",
   "aliases": [
    "24",
    "11000",
    "30",
    "18"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "小數加減",
   "titleEn": "2.5+1−2",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2.5+1-2=",
   "text": "2 . 5 + 1 − 2 EXE",
   "want": "1.5",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1.5",
   "aliases": [
    "1.5"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "開頭的 − 是負號",
   "titleEn": "leading minus is a negative sign",
   "keys": [
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "-5=",
   "text": "− 5 EXE",
   "want": "-5",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "-5",
   "aliases": [
    "-5"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "運算號後的 − 是負號",
   "titleEn": "minus after an operator is a negative sign",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2+-3=",
   "text": "2 + − 3 EXE",
   "want": "-1",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "-1",
   "aliases": [
    "-1"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "左括號後的 − 是負號",
   "titleEn": "minus after an open parenthesis is a negative sign",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2*(-3)=",
   "text": "2 × ( − 3 ) EXE",
   "want": "-6",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "-6",
   "aliases": [
    "-6"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "逗號後的 − 是負號",
   "titleEn": "minus after a comma is a negative sign",
   "keys": [
    {
     "id": "ADD",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "COMMA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@[ADD]3,-4)=",
   "text": "⇧+ 3 , − 4 ) EXE",
   "want": "5",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "5",
   "aliases": [
    "5",
    "101"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "先乘除後加減",
   "titleEn": "7×8−4×5",
   "keys": [
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N8",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "7*8-4*5=",
   "text": "7 × 8 − 4 × 5 EXE",
   "want": "36",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "36",
   "aliases": [
    "36",
    "100100",
    "44",
    "24"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "括號未閉也可直接算（實機容錯）",
   "titleEn": "(2+3)×(4−1 with open paren",
   "keys": [
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "(2+3)*(4-1=",
   "text": "( 2 + 3 ) × ( 4 − 1 EXE",
   "want": "15",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "15",
   "aliases": [
    "15",
    "1111",
    "17",
    "F"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "sin 30°",
   "titleEn": "sin 30",
   "keys": [
    {
     "id": "SIN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[SIN]30)=",
   "text": "sin 3 0 ) EXE",
   "want": "0.5",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.5",
   "aliases": [
    "0.5"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "sin⁻¹ 0.5（反正弦）",
   "titleEn": "sin⁻¹ 0.5",
   "keys": [
    {
     "id": "SIN",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@[SIN]0.5)=",
   "text": "⇧sin 0 . 5 ) EXE",
   "want": "30",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "30",
   "aliases": [
    "30",
    "11110",
    "36",
    "1E"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "100 ÷ 7，Norm1 顯示",
   "titleEn": "100÷7 Norm1",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DIV",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "100/7=",
   "text": "1 0 0 ÷ 7 EXE",
   "want": "14.28571429",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "14.28571429",
   "aliases": [
    "14.28571429"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "1 ÷ 200，Norm1 顯示（科學記數法）",
   "titleEn": "1÷200 Norm1",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DIV",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "1/200=",
   "text": "1 ÷ 2 0 0 EXE",
   "want": "5.e-03",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "5.e-03",
   "aliases": [
    "0.005"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "括號前省略了 ×",
   "titleEn": "omitted × before (",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2(5+4)=",
   "text": "2 ( 5 + 4 ) EXE",
   "want": "18",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "18",
   "aliases": [
    "18",
    "10010",
    "22",
    "12"
   ]
  },
  {
   "src": "upstream",
   "cat": "memory",
   "title": "Ans 連續運算",
   "titleEn": "Ans chaining",
   "keys": [
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DIV",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "3*4=/30=",
   "text": "3 × 4 EXE ÷ 3 0 EXE",
   "want": "0.4",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.4",
   "aliases": [
    "0.4"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "√(3²+4²)",
   "titleEn": "√3²+4²",
   "keys": [
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "3[SQR]+4[SQR]=[SQRT]=",
   "text": "3 x² + 4 x² EXE √ EXE",
   "want": "5",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "5",
   "aliases": [
    "5",
    "101"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "帶分數相加",
   "titleEn": "3 1/4 + 1 2/3",
   "keys": [
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "3[ABC]1[ABC]4+1[ABC]2[ABC]3=",
   "text": "3 ab/c 1 ab/c 4 + 1 ab/c 2 ab/c 3 EXE",
   "want": "4⌐11⌐12",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "4⌐11⌐12",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "整數減帶分數",
   "titleEn": "4 − 3 1/2",
   "keys": [
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "4-3[ABC]1[ABC]2=",
   "text": "4 − 3 ab/c 1 ab/c 2 EXE",
   "want": "1⌐2",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1⌐2",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "假分數模式下的分數加減",
   "titleEn": "2/3 + 1/2 as d/c",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2[ABC]3+1[ABC]2=",
   "text": "2 ab/c 3 + 1 ab/c 2 EXE",
   "want": "7⌐6",
   "isError": false,
   "prep": "m.setup.frac = 'd/c';",
   "note": "",
   "shown": "7⌐6",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "1.5 按 ab/c 轉成分數",
   "titleEn": "1.5 → fraction",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "1.5=[ABC]",
   "text": "1 . 5 EXE ab/c",
   "want": "1⌐1⌐2",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1⌐1⌐2",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "百分比",
   "titleEn": "2%",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2@(=",
   "text": "2 ⇧( EXE",
   "want": "0.02",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.02",
   "aliases": [
    "0.02"
   ]
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "150 × 20%",
   "titleEn": "150×20%",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "150*20@(=",
   "text": "1 5 0 × 2 0 ⇧( EXE",
   "want": "30",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "30",
   "aliases": [
    "30",
    "11110",
    "36",
    "1E"
   ]
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "660 ÷ 880% （求百分比）",
   "titleEn": "660÷880%",
   "keys": [
    {
     "id": "N6",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N6",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DIV",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N8",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N8",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "660/880@(=",
   "text": "6 6 0 ÷ 8 8 0 ⇧( EXE",
   "want": "75",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "75",
   "aliases": [
    "75",
    "1001011",
    "113",
    "4B"
   ]
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "2500 + 2500 × 15%",
   "titleEn": "2500+2500×15%",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2500+2500*15@(=",
   "text": "2 5 0 0 + 2 5 0 0 × 1 5 ⇧( EXE",
   "want": "2875",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2875",
   "aliases": [
    "2875",
    "101100111011",
    "5473",
    "B3B"
   ]
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "3500 − 3500 × 25%",
   "titleEn": "3500−3500×25%",
   "keys": [
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "3500-3500*25@(=",
   "text": "3 5 0 0 − 3 5 0 0 × 2 5 ⇧( EXE",
   "want": "2625",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2625",
   "aliases": [
    "2625",
    "101001000001",
    "5101",
    "A41"
   ]
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "(500+300) ÷ 500%",
   "titleEn": "(500+300)÷500%",
   "keys": [
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DIV",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "(500+300)/500@(=",
   "text": "( 5 0 0 + 3 0 0 ) ÷ 5 0 0 ⇧( EXE",
   "want": "160",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "160",
   "aliases": [
    "160",
    "10100000",
    "240",
    "A0"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "度分秒相加",
   "titleEn": "2°20′30″ + 0°39′30″",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2[DMS]20[DMS]30[DMS]+0[DMS]39[DMS]30[DMS]=",
   "text": "2 °′″ 2 0 °′″ 3 0 °′″ + 0 °′″ 3 9 °′″ 3 0 °′″ EXE",
   "want": "3°0°0",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "3°0°0",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "度分秒乘小數",
   "titleEn": "2°20′ × 3.5",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2[DMS]20[DMS]*3.5=",
   "text": "2 °′″ 2 0 °′″ × 3 . 5 EXE",
   "want": "8°10°0",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "8°10°0",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "fraction",
   "title": "2.255 轉度分秒",
   "titleEn": "2.255 → sexagesimal",
   "keys": [
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DMS",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "2.255=[DMS]",
   "text": "2 . 2 5 5 EXE °′″",
   "want": "2°15°18",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2°15°18",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "log₂ 16（指定底數的對數）",
   "titleEn": "log(2,16)",
   "keys": [
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "COMMA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N6",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[LOG]2,16)=",
   "text": "log 2 , 1 6 ) EXE",
   "want": "4",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "4",
   "aliases": [
    "4",
    "100"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "log 16",
   "titleEn": "log 16",
   "keys": [
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N6",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[LOG]16)=",
   "text": "log 1 6 ) EXE",
   "want": "1.204119983",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1.204119983",
   "aliases": [
    "1.204119983"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "ln 90",
   "titleEn": "ln 90",
   "keys": [
    {
     "id": "LN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[LN]90)=",
   "text": "ln 9 0 ) EXE",
   "want": "4.49980967",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "4.49980967",
   "aliases": [
    "4.49980967"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "e^10（自然指數）",
   "titleEn": "e^10",
   "keys": [
    {
     "id": "LN",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@[LN]10)=",
   "text": "⇧ln 1 0 ) EXE",
   "want": "22026.46579",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "22026.46579",
   "aliases": [
    "22026.46579"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "括號相乘",
   "titleEn": "(√2+1)(√2−1)",
   "keys": [
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "([SQRT]2)+1)([SQRT]2)-1)=",
   "text": "( √ 2 ) + 1 ) ( √ 2 ) − 1 ) EXE",
   "want": "1",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1",
   "aliases": [
    "1"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "冪次運算",
   "titleEn": "(1+1)^(2+2)",
   "keys": [
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "(1+1)[POW]2+2)=",
   "text": "( 1 + 1 ) xʸ 2 + 2 ) EXE",
   "want": "16",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "16",
   "aliases": [
    "16",
    "10000",
    "20",
    "10"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "負數的分数次方",
   "titleEn": "−2^(2/3)",
   "keys": [
    {
     "id": "NEG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ABC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[NEG]2[POW]2[ABC]3)=",
   "text": "(−) 2 xʸ 2 ab/c 3 ) EXE",
   "want": "-1.587401052",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "-1.587401052",
   "aliases": [
    "-1.587401052"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "sinh 1（雙曲正弦）",
   "titleEn": "sinh 1",
   "keys": [
    {
     "id": "HYP",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SIN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[HYP][SIN]1)=",
   "text": "hyp sin 1 ) EXE",
   "want": "1.175201194",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1.175201194",
   "aliases": [
    "1.175201194"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "3√8（用 xⁿ√ 鍵）",
   "titleEn": "3√8 via xroot",
   "keys": [
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N8",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "3@[POW]8)=",
   "text": "3 ⇧xʸ 8 ) EXE",
   "want": "2",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2",
   "aliases": [
    "2",
    "10"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "立方根 27",
   "titleEn": "cube root 27",
   "keys": [
    {
     "id": "CUBE",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@[CUBE]27)=",
   "text": "⇧x³ 2 7 ) EXE",
   "want": "3",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "3",
   "aliases": [
    "3",
    "11"
   ]
  },
  {
   "src": "upstream",
   "cat": "error",
   "title": "結果超出可計算範圍",
   "titleEn": "general result overflow",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXP",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "1[EXP]99*10=",
   "text": "1 EXP 9 9 × 1 0 EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "10^ 的輸入範圍",
   "titleEn": "10^ input range",
   "keys": [
    {
     "id": "LOG",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@[LOG]100)=",
   "text": "⇧log 1 0 0 ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "e^ 的輸入範圍",
   "titleEn": "e^ input range",
   "keys": [
    {
     "id": "LN",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@[LN]231)=",
   "text": "⇧ln 2 3 1 ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "sinh 的輸入範圍",
   "titleEn": "sinh input range",
   "keys": [
    {
     "id": "HYP",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SIN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[HYP][SIN]231)=",
   "text": "hyp sin 2 3 1 ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "sin 的度數輸入範圍",
   "titleEn": "sin degree input range",
   "keys": [
    {
     "id": "SIN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[SIN]9000000000)=",
   "text": "sin 9 0 0 0 0 0 0 0 0 0 ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "階乘 (5+3)!",
   "titleEn": "(5+3)!",
   "keys": [
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RECIP",
     "shift": true,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "(5+3)@[RECIP]=",
   "text": "( 5 + 3 ) ⇧x⁻¹ EXE",
   "want": "40320",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "40320",
   "aliases": [
    "40320",
    "1001110110000000",
    "116600",
    "9D80"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "Abs 絕對值",
   "titleEn": "Abs(2−7)",
   "keys": [
    {
     "id": "RPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@)2-7)=",
   "text": "⇧) 2 − 7 ) EXE",
   "want": "5",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "5",
   "aliases": [
    "5",
    "101"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "10 P 4（排列）",
   "titleEn": "10P4",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "10@*4=",
   "text": "1 0 ⇧× 4 EXE",
   "want": "5040",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "5040",
   "aliases": [
    "5040",
    "1001110110000",
    "11660",
    "13B0"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "10 C 4（組合）",
   "titleEn": "10C4",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DIV",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "10@/4=",
   "text": "1 0 ⇧÷ 4 EXE",
   "want": "210",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "210",
   "aliases": [
    "210",
    "11010010",
    "322",
    "D2"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "nPr 的 n 輸入範圍",
   "titleEn": "nPr n input range",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "10000000000@*1=",
   "text": "1 0 0 0 0 0 0 0 0 0 0 ⇧× 1 EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "Pol 轉極座標，求 r",
   "titleEn": "Pol(√2,√2) r",
   "keys": [
    {
     "id": "ADD",
     "shift": true,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "COMMA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@+[SQRT]2),[SQRT]2))=",
   "text": "⇧+ √ 2 ) , √ 2 ) ) EXE",
   "want": "2",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2",
   "aliases": [
    "2",
    "10"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "Rec 轉直角座標，求 x",
   "titleEn": "Rec(2,30) x",
   "keys": [
    {
     "id": "SUB",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "COMMA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "@-2,30)=",
   "text": "⇧− 2 , 3 0 ) EXE",
   "want": "1.732050808",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1.732050808",
   "aliases": [
    "1.732050808"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "1234 按 ENG 轉工程記數法",
   "titleEn": "1234 in ENG",
   "keys": [
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ENG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "1234=[ENG]",
   "text": "1 2 3 4 EXE ENG",
   "want": "1.234e03",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1.234e03",
   "aliases": [
    "1234",
    "10011010010",
    "2322",
    "4D2"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "BIN（二進位）1+1",
   "titleEn": "BIN 1+1",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]1+1=",
   "text": "MODE 選3 BIN 1 + 1 EXE",
   "want": "10.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "10.",
   "aliases": [
    "2",
    "10"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "OCT（八進位）7+1",
   "titleEn": "OCT 7+1",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LN]7+1=",
   "text": "MODE 選3 OCT 7 + 1 EXE",
   "want": "10.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "10.",
   "aliases": [
    "8",
    "1000",
    "10"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "HEX（十六進位）1F+1",
   "titleEn": "HEX 1F+1",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[POW]1[TAN]+1=",
   "text": "MODE 選3 HEX 1 F + 1 EXE",
   "want": "20.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "20.",
   "aliases": [
    "32",
    "100000",
    "40",
    "20"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "十進位 30 轉二進位",
   "titleEn": "DEC 30 → BIN",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]330=[LOG]",
   "text": "MODE 選3 3 0 EXE BIN",
   "want": "11110.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "11110.",
   "aliases": [
    "30",
    "11110",
    "36",
    "1E"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "十進位 30 轉八進位",
   "titleEn": "DEC 30 → OCT",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LN",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]330=[LN]",
   "text": "MODE 選3 3 0 EXE OCT",
   "want": "36.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "36.",
   "aliases": [
    "30",
    "11110",
    "36",
    "1E"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "十進位 30 轉十六進位",
   "titleEn": "DEC 30 → HEX",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]330=[POW]",
   "text": "MODE 選3 3 0 EXE HEX",
   "want": "1E.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1E.",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "二進位正數溢出",
   "titleEn": "BIN positive overflow",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]111111111+1=",
   "text": "MODE 選3 BIN 1 1 1 1 1 1 1 1 1 + 1 EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "八進位正數溢出",
   "titleEn": "OCT positive overflow",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LN]3777777777+1=",
   "text": "MODE 選3 OCT 3 7 7 7 7 7 7 7 7 7 + 1 EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "十六進位正數溢出",
   "titleEn": "HEX positive overflow",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N7",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[POW]7[TAN][TAN][TAN][TAN][TAN][TAN][TAN]+1=",
   "text": "MODE 選3 HEX 7 F F F F F F F + 1 EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "二進位輸入位數過多",
   "titleEn": "BIN oversized input",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]10000000000=",
   "text": "MODE 選3 BIN 1 0 0 0 0 0 0 0 0 0 0 EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "複數結果先顯示實部",
   "titleEn": "2×(√3+i) real part",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "MUL",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ENG",
     "shift": false,
     "alpha": true
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]22*([SQRT]3)+#[ENG])=",
   "text": "MODE 選2 2 × ( √ 3 ) + αENG ) EXE",
   "want": "3.464101615",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "3.464101615",
   "aliases": [
    "3.464101615"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "複數的絕對值",
   "titleEn": "Abs(2+2i)",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ENG",
     "shift": false,
     "alpha": true
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]2@)2+2#[ENG])=",
   "text": "MODE 選2 ⇧) 2 + 2 αENG ) EXE",
   "want": "2.828427125",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2.828427125",
   "aliases": [
    "2.828427125"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "複數的幅角 arg",
   "titleEn": "arg(2+2i)",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": true,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ENG",
     "shift": false,
     "alpha": true
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]2@(2+2#[ENG])=",
   "text": "MODE 選2 ⇧( 2 + 2 αENG ) EXE",
   "want": "45",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "45",
   "aliases": [
    "45",
    "101101",
    "55",
    "2D"
   ]
  },
  {
   "src": "upstream",
   "cat": "arith",
   "title": "√(−2) 保留十位有效數字",
   "titleEn": "sqrt(-2) keeps ten digits",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": true,
     "alpha": false
    }
   ],
   "seq": "[MODE]2[SQRT]0-2)=@[EXE]",
   "text": "MODE 選2 √ 0 − 2 ) EXE ⇧EXE",
   "want": "1.414213562",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1.414213562",
   "aliases": [
    "1.414213562"
   ]
  },
  {
   "src": "upstream",
   "cat": "function",
   "title": "不能對複數開平方",
   "titleEn": "sqrt of a complex argument is not supported",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N4",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ENG",
     "shift": false,
     "alpha": true
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]2[SQRT]3+4#[ENG])=",
   "text": "MODE 選2 √ 3 + 4 αENG ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "非 CMPLX 模式 √(−1) 報 Math ERROR",
   "titleEn": "sqrt(-1) stays a Math ERROR outside CMPLX",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQRT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]1[SQRT]0-1)=",
   "text": "MODE 選1 √ 0 − 1 ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "upstream",
   "cat": "mode",
   "title": "CMPLX 模式 (−1)^0.5 = i",
   "titleEn": "(-1)^0.5 is i in CMPLX",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": true,
     "alpha": false
    }
   ],
   "seq": "[MODE]2(0-1)[POW]0.5)=@[EXE]",
   "text": "MODE 選2 ( 0 − 1 ) xʸ 0 . 5 ) EXE ⇧EXE",
   "want": "1",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1",
   "aliases": [
    "1"
   ]
  },
  {
   "src": "upstream",
   "cat": "base",
   "title": "非 CMPLX 模式 (−1)^0.5 報 Math ERROR",
   "titleEn": "(-1)^0.5 stays a Math ERROR outside CMPLX",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "DOT",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]1(0-1)[POW]0.5)=",
   "text": "MODE 選1 ( 0 − 1 ) xʸ 0 . 5 ) EXE",
   "want": "Math ERROR",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "輸入中途換基底：算式必須保留",
   "titleEn": "輸入中途換基底：算式必須保留",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]31[LOG]",
   "text": "MODE 選3 1 BIN",
   "want": "0.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.",
   "aliases": [
    "0"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "輸入中途換基底：數字依新基底重新解讀 (BIN 11 → DEC 11)",
   "titleEn": "輸入中途換基底：數字依新基底重新解讀 (BIN 11 → DEC 11)",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SQR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]11[SQR]=",
   "text": "MODE 選3 BIN 1 1 DEC EXE",
   "want": "11.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "11.",
   "aliases": [
    "3",
    "11"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "已有結果時換基底：結果的值保留並重新顯示",
   "titleEn": "已有結果時換基底：結果的值保留並重新顯示",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]330=[LOG]",
   "text": "MODE 選3 3 0 EXE BIN",
   "want": "11110.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "11110.",
   "aliases": [
    "30",
    "11110",
    "36",
    "1E"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "新基底下非法數字：按 EXE 才報 Syntax ERROR（不是靜默吞掉）",
   "titleEn": "新基底下非法數字：按 EXE 才報 Syntax ERROR（不是靜默吞掉）",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]35[LOG]=",
   "text": "MODE 選3 5 BIN EXE",
   "want": "",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Syntax ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 模式下可輸入 2（實機不攔截按鍵）",
   "titleEn": "BIN 模式下可輸入 2（實機不攔截按鍵）",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]2",
   "text": "MODE 選3 BIN 2",
   "want": "0.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.",
   "aliases": [
    "0"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 模式下輸入 2 後按 EXE → Syntax ERROR",
   "titleEn": "BIN 模式下輸入 2 後按 EXE → Syntax ERROR",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]2=",
   "text": "MODE 選3 BIN 2 EXE",
   "want": "",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Syntax ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 模式下可輸入字母 A",
   "titleEn": "BIN 模式下可輸入字母 A",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "NEG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG][NEG]",
   "text": "MODE 選3 BIN A",
   "want": "0.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.",
   "aliases": [
    "0"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 模式下輸入 A 後按 EXE → Syntax ERROR",
   "titleEn": "BIN 模式下輸入 A 後按 EXE → Syntax ERROR",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "NEG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG][NEG]=",
   "text": "MODE 選3 BIN A EXE",
   "want": "",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Syntax ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 模式下括號可用",
   "titleEn": "BIN 模式下括號可用",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LPAR",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "RPAR",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG](10)",
   "text": "MODE 選3 BIN ( 1 0 )",
   "want": "0.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.",
   "aliases": [
    "0"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 合法輸入 101 正常計算",
   "titleEn": "BIN 合法輸入 101 正常計算",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]101=",
   "text": "MODE 選3 BIN 1 0 1 EXE",
   "want": "101.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "101.",
   "aliases": [
    "5",
    "101"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 負數以 10 補碼顯示",
   "titleEn": "BIN 負數以 10 補碼顯示",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "AC",
     "shift": false,
     "alpha": false
    },
    {
     "id": "SUB",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG][AC][SUB]1=",
   "text": "MODE 選3 BIN AC − 1 EXE",
   "want": "1111111111.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "1111111111.",
   "aliases": [
    "1023",
    "1111111111",
    "1777",
    "3FF"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "HEX 運算正常",
   "titleEn": "HEX 運算正常",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "POW",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "TAN",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[POW]1[TAN]+1=",
   "text": "MODE 選3 HEX 1 F + 1 EXE",
   "want": "20.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "20.",
   "aliases": [
    "32",
    "100000",
    "40",
    "20"
   ]
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "BIN 溢位正確報錯",
   "titleEn": "BIN 溢位正確報錯",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "ADD",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3[LOG]111111111+1=",
   "text": "MODE 選3 BIN 1 1 1 1 1 1 1 1 1 + 1 EXE",
   "want": "",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "十進位 512 切 BIN → Math ERROR（實機行為）",
   "titleEn": "十進位 512 切 BIN → Math ERROR（實機行為）",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N2",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3512=[LOG]",
   "text": "MODE 選3 5 1 2 EXE BIN",
   "want": "",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Math ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "formula",
   "title": "按 FMLA 顯示 Formula No.?",
   "titleEn": "按 FMLA 顯示 Formula No.?",
   "keys": [
    {
     "id": "FMLA",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[FMLA]",
   "text": "FMLA",
   "want": "",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "Formula No.?",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "formula",
   "title": "輸入第一位數字仍待輸入",
   "titleEn": "輸入第一位數字仍待輸入",
   "keys": [
    {
     "id": "FMLA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[FMLA]0",
   "text": "FMLA 0",
   "want": "-0-",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "-0-",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "formula",
   "title": "輸入兩位數自動跳進公式變數",
   "titleEn": "輸入兩位數自動跳進公式變數",
   "keys": [
    {
     "id": "FMLA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[FMLA]01",
   "text": "FMLA 0 1",
   "want": "0.",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "0.",
   "aliases": [
    "0"
   ]
  },
  {
   "src": "ours",
   "cat": "formula",
   "title": "公式編號非法 → Syntax ERROR",
   "titleEn": "公式編號非法 → Syntax ERROR",
   "keys": [
    {
     "id": "FMLA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N9",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[FMLA]99",
   "text": "FMLA 9 9",
   "want": "",
   "isError": true,
   "prep": "",
   "note": "",
   "shown": "Syntax ERROR",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "formula",
   "title": "FMLA 01 第一根",
   "titleEn": "FMLA 01 第一根",
   "keys": [
    {
     "id": "FMLA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "NEG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N6",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[FMLA]011=[NEG]5=6=",
   "text": "FMLA 0 1 1 EXE (−) 5 EXE 6 EXE",
   "want": "3",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "3",
   "aliases": [
    "3",
    "11"
   ]
  },
  {
   "src": "ours",
   "cat": "formula",
   "title": "FMLA 01 再按 EXE 得第二根",
   "titleEn": "FMLA 01 再按 EXE 得第二根",
   "keys": [
    {
     "id": "FMLA",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N0",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "NEG",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N6",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[FMLA]011=[NEG]5=6==",
   "text": "FMLA 0 1 1 EXE (−) 5 EXE 6 EXE EXE",
   "want": "2",
   "isError": false,
   "prep": "",
   "note": "",
   "shown": "2",
   "aliases": [
    "2",
    "10"
   ]
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "聯立二元一次",
   "keys": [],
   "seq": "?→A: ?→B: ?→C: ?→D: ?→X: ?→Y: AX-DB→M: M⁻¹(CX-YB→X◢ M⁻¹(AY-DC→Y",
   "text": "?→A: ?→B: ?→C: ?→D: ?→X: ?→Y: AX-DB→M: M⁻¹(CX-YB→X◢ M⁻¹(AY-DC→Y",
   "want": "",
   "isError": false,
   "note": "ax + by = c；dx + ey = f。依次輸入 a、b、c、d、e、f；EXE 查看 x、y。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/simultaneous1.htm",
   "mode": "COMP",
   "id": "linear",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "一元三次（含複根）",
   "keys": [],
   "seq": "?→A: ?→B: ?→C: ?→D: 9A(BC-3AD)⌐2-B³→M: √(M²+(3AC-B²)³ M+: If Ans=Conjg(Ans: Then cbrt(M)+cbrt(M-2Ans: Else 2cbrt(Abs(M))cos(3⁻¹arg(M: IfEnd: (Ans-B)⌐(3A◢ -B⌐A-Ans→M: M⌐2: Ans+√(-3Ans²-BM⌐A-C⌐A M-◢ M",
   "text": "?→A: ?→B: ?→C: ?→D: 9A(BC-3AD)⌐2-B³→M: √(M²+(3AC-B²)³ M+: If Ans=Conjg(Ans: Then cbrt(M)+cbrt(M-2Ans: Else 2cbrt(Abs(M))cos(3⁻¹arg(M: IfEnd: (Ans-B)⌐(3A◢ -B⌐A-Ans→M: M⌐2: Ans+√(-3Ans²-BM⌐A-C⌐A M-◢ M",
   "want": "",
   "isError": false,
   "note": "ax³ + bx² + cx + d = 0。依次輸入 a、b、c、d；EXE 查看下一根，SHIFT → EXE 切換實部／虛部。採用已驗證的保留係數版。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/cubic1.htm",
   "mode": "CMPLX",
   "id": "cubic",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "圓形與直線的交點(II)",
   "keys": [],
   "seq": "?→X: ?→Y: ?→M: ?→A: -.5A→A: ?→B: -.5B→B: AX+BYM-: ?→C: √(A²+B²-C→C: cos⁻¹(M÷Pol(XC,YC→X: A+Ccos(Y-X◢ B+Csin(Y-X◢ A+Rec(C,X+Y◢ B+Y",
   "text": "?→X: ?→Y: ?→M: ?→A: -.5A→A: ?→B: -.5B→B: AX+BYM-: ?→C: √(A²+B²-C→C: cos⁻¹(M÷Pol(XC,YC→X: A+Ccos(Y-X◢ B+Csin(Y-X◢ A+Rec(C,X+Y◢ B+Y",
   "want": "",
   "isError": false,
   "note": "求直線與圓的兩個交點。輸入順序：先直線的 x 係數、y 係數、常數（M），再圓的 x、y、常數係數（A B C）；EXE 依次顯示第一個交點的 x、y 與第二個交點的 x、y。直線與圓不相交時 Math ERROR。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/circle_intersection2.htm",
   "mode": "COMP",
   "id": "linecircle2",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三點求圓（小數版）",
   "keys": [],
   "seq": "?→A: ?→B: ?→C: ?→D:(C - A) ┘(B - D→Y: B + D - YA - YC→X:?→C: ?→D: (C - A) ┘(B - D→M:B + D - MA - MC→B:(B - X) ┘(2Y - 2M→A◢ M Ans + B┘2→B◢Pol( A - C, B - D◢ -2A◢ -2B◢ A² + B² - X²",
   "text": "?→A: ?→B: ?→C: ?→D:(C - A) ┘(B - D→Y: B + D - YA - YC→X:?→C: ?→D: (C - A) ┘(B - D→M:B + D - MA - MC→B:(B - X) ┘(2Y - 2M→A◢ M Ans + B┘2→B◢Pol( A - C, B - D◢ -2A◢ -2B◢ A² + B² - X²",
   "want": "",
   "isError": false,
   "note": "已知圓周上三點的座標，求圓心、半徑與圓方程。依次輸入 (x₁,y₁)、(x₂,y₂)、(x₃,y₃)；EXE 依次顯示圓心 x、圓心 y、半徑，再按 EXE 顯示圓方程的 D、E、F。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/3pt_cirlce.htm",
   "mode": "COMP",
   "id": "circle3a",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三點求圓（分數版）",
   "keys": [],
   "seq": "?→A: ?→B: ?→C: ?→D:(C - A)┘(B - D→Y: B + D - YA - YC→X:?→C: ?→D: (C - A)┘ (B - D→M:B + D - MA - MC→B: (B - X)┘(2Y - 2M→A◢M Ans + B┘2→B◢ √( (A - C)² + (B - D)²→X◢-2A◢ -2B◢ A² + B² - X²",
   "text": "?→A: ?→B: ?→C: ?→D:(C - A)┘(B - D→Y: B + D - YA - YC→X:?→C: ?→D: (C - A)┘ (B - D→M:B + D - MA - MC→B: (B - X)┘(2Y - 2M→A◢M Ans + B┘2→B◢ √( (A - C)² + (B - D)²→X◢-2A◢ -2B◢ A² + B² - X²",
   "want": "",
   "isError": false,
   "note": "同「三點求圓」，但半徑與圓心會以分數形式顯示，適合輸入為整數或分數的座標。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/3pt_cirlce.htm",
   "mode": "COMP",
   "id": "circle3b",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三角形四心（分數版）",
   "keys": [],
   "seq": "?→X: ?→Y: ?→A: ?→B: ?→C: ?→D: (A+C+X)┘3◢(B+D+Y)┘3◢ FreqOn: X, Y ; Pol(A-C , B-DDT:(x̄-C)┘ (ȳ-D→Y:ȳ - B: C + Ans(YA+B-YC-D)┘(A+Ansȳ-x̄→X◢ B+AY-XY→Y◢ (A+C+x̄-X)┘2◢(B+D+ȳ-Y)┘2◢A , B; Pol(x̄-C, ȳ -D) + 0Pol(x̄-A, ȳ-B DT:C , D ; XDT:x̄◢ȳ",
   "text": "?→X: ?→Y: ?→A: ?→B: ?→C: ?→D: (A+C+X)┘3◢(B+D+Y)┘3◢ FreqOn: X, Y ; Pol(A-C , B-DDT:(x̄-C)┘ (ȳ-D→Y:ȳ - B: C + Ans(YA+B-YC-D)┘(A+Ansȳ-x̄→X◢ B+AY-XY→Y◢ (A+C+x̄-X)┘2◢(B+D+ȳ-Y)┘2◢A , B; Pol(x̄-C, ȳ -D) + 0Pol(x̄-A, ȳ-B DT:C , D ; XDT:x̄◢ȳ",
   "want": "",
   "isError": false,
   "note": "已知三角形三頂點座標，求重心、垂心、外心、內心。需在 REG 模式執行。依次輸入 (x₁,y₁)、(x₂,y₂)、(x₃,y₃)；EXE 依次顯示重心、垂心、外心、內心的座標。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/four_centre.htm",
   "mode": "REG",
   "id": "centres1",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三角形四心（小數版）",
   "keys": [],
   "seq": "?→X: ?→Y: ?→A: ?→B: ?→C: ?→D: 3⁻¹(A+C+X◢3⁻¹(B+D+Y◢ FreqOn: X , Y ; Pol(A-C , B-DDT:(x̄-C) ÷ (ȳ-D→Y:ȳ - B: C + Ans(YA+B-YC-D) ÷(A+Ansȳ-x̄→X◢ B+AY-XY→Y◢.5(A+C+x̄-X◢.5(B+D+ȳ-Y◢A , B; Pol(x̄-C, ȳ -D) + 0Pol(x̄-A, ȳ-B DT:C , D ; XDT:x̄◢ȳ",
   "text": "?→X: ?→Y: ?→A: ?→B: ?→C: ?→D: 3⁻¹(A+C+X◢3⁻¹(B+D+Y◢ FreqOn: X , Y ; Pol(A-C , B-DDT:(x̄-C) ÷ (ȳ-D→Y:ȳ - B: C + Ans(YA+B-YC-D) ÷(A+Ansȳ-x̄→X◢ B+AY-XY→Y◢.5(A+C+x̄-X◢.5(B+D+ȳ-Y◢A , B; Pol(x̄-C, ȳ -D) + 0Pol(x̄-A, ȳ-B DT:C , D ; XDT:x̄◢ȳ",
   "want": "",
   "isError": false,
   "note": "三角形四心的小數版本，運算較簡潔，結果以小數顯示。需在 REG 模式執行。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/four_centre.htm",
   "mode": "REG",
   "id": "centres2",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三角形四心（小數簡化版）",
   "keys": [],
   "seq": "?→A: ?→B: ?→X: ?→Y: ?→C: ?→D: 3⁻¹(A+C+X◢3⁻¹(B+D+Y◢ FreqOn: X , Y ; Pol(B-D ,A-CDT:tan(Y→Y: B -ȳ: C + Ans(Yx̄+ȳ-YC-D) ÷(x̄+Ansȳ-A→X◢ȳ+x̄Y-XY→Y◢.5(A+C+x̄-X◢.5(B+D+ȳ-Y◢A , B; Pol(x̄-C, ȳ -D) + 0Pol(x̄-A, ȳ-B DT:C , D ; XDT:x̄◢ȳ",
   "text": "?→A: ?→B: ?→X: ?→Y: ?→C: ?→D: 3⁻¹(A+C+X◢3⁻¹(B+D+Y◢ FreqOn: X , Y ; Pol(B-D ,A-CDT:tan(Y→Y: B -ȳ: C + Ans(Yx̄+ȳ-YC-D) ÷(x̄+Ansȳ-A→X◢ȳ+x̄Y-XY→Y◢.5(A+C+x̄-X◢.5(B+D+ȳ-Y◢A , B; Pol(x̄-C, ȳ -D) + 0Pol(x̄-A, ȳ-B DT:C , D ; XDT:x̄◢ȳ",
   "want": "",
   "isError": false,
   "note": "三角形四心的簡化小數版本，用正切法求垂心，程式最短。需在 REG 模式執行。",
   "url": "https://webcal.freetzi.com/casio.fx-50FH/four_centre.htm",
   "mode": "REG",
   "id": "centres3",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "直線與圓的交點（S5 正確版）",
   "keys": [],
   "seq": "?→D\n?→X\n?→Y\n?→C\n?→B\n?→A\nX=0⇒Goto 1\nY²+CDY+AD²→A\n-2XY-CDX+BD²→B\nD²+X²→M\n(-B-√(B²-4AM))÷(2M)→C\n(Y-CX)÷D◢\nC◢\n(-B+√(B²-4AM))÷(2M)→C\n(Y-CX)÷D◢\nC◢\nGoto 2\nLbl 1\nY÷D→X◢\nC²-4(X²+BX+A)→M\n(-C+√(M))÷2◢\nX◢\n(-C-√(M))÷2◢\nLbl 2",
   "text": "?→D\n?→X\n?→Y\n?→C\n?→B\n?→A\nX=0⇒Goto 1\nY²+CDY+AD²→A\n-2XY-CDX+BD²→B\nD²+X²→M\n(-B-√(B²-4AM))÷(2M)→C\n(Y-CX)÷D◢\nC◢\n(-B+√(B²-4AM))÷(2M)→C\n(Y-CX)÷D◢\nC◢\nGoto 2\nLbl 1\nY÷D→X◢\nC²-4(X²+BX+A)→M\n(-C+√(M))÷2◢\nX◢\n(-C-√(M))÷2◢\nLbl 2",
   "want": "",
   "isError": false,
   "note": "直線與圓的交點。上游 S5 印刷版，經 424 條測試驗證，鉛直線也處理得了。輸入順序：先直線的 x 係數、y 係數、常數，再圓的 x、y、常數係數；EXE 依次顯示兩個交點的座標。直線與圓不相交時 Math ERROR。",
   "url": "https://github.com/throwingogo-hub/fx-50fh-ii",
   "mode": "COMP",
   "id": "linecircle_s5",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三點求圓（S5 正確版）",
   "keys": [],
   "seq": "?→A\n?→B\n?→C\n?→D\n?→X\n?→Y\nC-A→C\nD-B→D\nX-A→X\nY-B→Y\n(C(X²+Y²)-X(C²+D²))÷2÷(CY-DX)→M\n((C²+D²)Y-(X²+Y²)D)÷2÷(CY-DX)→C\nA+C→X\nB+M→Y\nX◢Y◢\n√((X-A)²+(Y-B)²)→M◢\n-2X◢-2Y◢\nX²+Y²-M²",
   "text": "?→A\n?→B\n?→C\n?→D\n?→X\n?→Y\nC-A→C\nD-B→D\nX-A→X\nY-B→Y\n(C(X²+Y²)-X(C²+D²))÷2÷(CY-DX)→M\n((C²+D²)Y-(X²+Y²)D)÷2÷(CY-DX)→C\nA+C→X\nB+M→Y\nX◢Y◢\n√((X-A)²+(Y-B)²)→M◢\n-2X◢-2Y◢\nX²+Y²-M²",
   "want": "",
   "isError": false,
   "note": "已知圓周上三點的座標，求圓心、半徑與圓方程。上游 S5 印刷版，經 424 條測試驗證。依次輸入 (x₁,y₁)、(x₂,y₂)、(x₃,y₃)；EXE 依次顯示圓心 x、圓心 y、半徑，再按 EXE 顯示圓方程的 D、E、F。三點共線會 Math ERROR；與 webcal 版不同，前兩點 y 相同也能算。",
   "url": "https://github.com/throwingogo-hub/fx-50fh-ii",
   "mode": "COMP",
   "id": "circle3_s5",
   "aliases": []
  },
  {
   "src": "dse",
   "cat": "program",
   "title": "三角形四心（S5 正確版）",
   "keys": [],
   "seq": "ClrStat\n?→A\n?→B\nA,B DT\n?→C\n?→D\nC,D DT\n?→X\n?→Y\nX,Y DT\nΣx÷3◢\nΣy÷3◢\n√((C-X)²+(D-Y)²)+√((X-A)²+(Y-B)²)+√((A-C)²+(B-D)²)→M\n(√((C-X)²+(D-Y)²)×A+√((X-A)²+(Y-B)²)×C+√((A-C)²+(B-D)²)×X)÷M◢\n(√((C-X)²+(D-Y)²)×B+√((X-A)²+(Y-B)²)×D+√((A-C)²+(B-D)²)×Y)÷M◢\n2×(A×(D-Y)+C×(Y-B)+X×(B-D))→M\nPol(((A²+B²)×(D-Y)+(C²+D²)×(Y-B)+(X²+Y²)×(B-D))÷M,((A²+B²)×(X-C)+(C²+D²)×(A-X)+(X²+Y²)×(C-A))÷M)\nRec(X,Y)\nΣx-2X◢\nΣy-2Y◢\nX◢\nY◢",
   "text": "ClrStat\n?→A\n?→B\nA,B DT\n?→C\n?→D\nC,D DT\n?→X\n?→Y\nX,Y DT\nΣx÷3◢\nΣy÷3◢\n√((C-X)²+(D-Y)²)+√((X-A)²+(Y-B)²)+√((A-C)²+(B-D)²)→M\n(√((C-X)²+(D-Y)²)×A+√((X-A)²+(Y-B)²)×C+√((A-C)²+(B-D)²)×X)÷M◢\n(√((C-X)²+(D-Y)²)×B+√((X-A)²+(Y-B)²)×D+√((A-C)²+(B-D)²)×Y)÷M◢\n2×(A×(D-Y)+C×(Y-B)+X×(B-D))→M\nPol(((A²+B²)×(D-Y)+(C²+D²)×(Y-B)+(X²+Y²)×(B-D))÷M,((A²+B²)×(X-C)+(C²+D²)×(A-X)+(X²+Y²)×(C-A))÷M)\nRec(X,Y)\nΣx-2X◢\nΣy-2Y◢\nX◢\nY◢",
   "want": "",
   "isError": false,
   "note": "三角形重心、內心、垂心、外心。上游 S5 印刷版，經 424 條測試驗證，一般三角形都算得對（webcal 版在一般三角形上會算錯垂心）。需在 REG 模式執行。依次輸入三個頂點座標；EXE 依次顯示重心、內心、垂心、外心的座標。",
   "url": "https://github.com/throwingogo-hub/fx-50fh-ii",
   "mode": "REG",
   "id": "centres_s5",
   "aliases": []
  },
  {
   "src": "ours",
   "cat": "base",
   "title": "十進位 511 轉二進位（BIN 正數上限）",
   "titleEn": "decimal 511 in binary (the BIN positive limit)",
   "keys": [
    {
     "id": "MODE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N3",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N5",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "N1",
     "shift": false,
     "alpha": false
    },
    {
     "id": "EXE",
     "shift": false,
     "alpha": false
    },
    {
     "id": "LOG",
     "shift": false,
     "alpha": false
    }
   ],
   "seq": "[MODE]3511=[LOG]",
   "text": "MODE 選3 5 1 1 EXE BIN",
   "want": "111111111.",
   "shown": "111111111.",
   "isError": false,
   "prep": "",
   "note": "二進位最大正數 111111111（十進位 511）；再加 1 就溢出。",
   "aliases": [
    "511",
    "111111111",
    "777",
    "1FF"
   ]
  }
 ]
};
