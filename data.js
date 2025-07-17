const quizData = {
  "コンパイラ：字句解析": [
    {
      question_number: "Q1",
      question: "有限オートマトン〈Σ，Q，Δ，s，F〉のΣは★を表す。",
      answer: "文字集合"
    },
    {
      question_number: "Q2",
      question: "正規表現「ε」は★を表す。",
      answer: "空文字列"
    },
    {
      question_number: "Q3",
      question: "有限オートマトン〈Σ，Q，Δ，s，F〉のsは★を表す。",
      answer: "初期状態"
    },
    {
      question_number: "Q4",
      question: "正規表現「S＊」はSの★を表す。",
      answer: "閉包"
    },
    {
      question_number: "Q5",
      question: "正規表現「S・T」はSとTの★を表す。",
      answer: "連結"
    },
    {
      question_number: "Q6",
      question: "有限オートマトン〈Σ，Q，Δ，s，F〉のΔは★を表す。",
      answer: "状態遷移"
    },
    {
      question_number: "Q7",
      question: "有限オートマトン〈Σ，Q，Δ，s，F〉のQは★を表す。",
      answer: "状態集合"
    },
    {
      question_number: "Q8",
      question: "状態遷移において⊥は★を表す。",
      answer: "遷移先状態未定義"
    },
    {
      question_number: "Q9",
      question: "正規表現「S｜T」はSとTの★を表す。",
      answer: "選択"
    },
    {
      question_number: "Q10",
      question: "有限オートマトン〈Σ，Q，Δ，s，F〉のFは★を表す。",
      answer: "受理状態"
    }
  ],
  "コンパイラ：意味解析＆コード解析": [
    {
      question_number: "Q1",
      question: "★は、計算の途中でレジスタが不足するときに中間結果をメモリに保存するために用いられる。",
      answer: "一時変数"
    },
    {
      question_number: "Q2",
      question: "★レジスタに対しては、関数の呼び出し側が使用中のレジスタ値を保存しておき復帰後に回復する。",
      answer: "呼出し前保存"
    },
    {
      question_number: "Q3",
      question: "関数呼出において、引数、戻り番地、局所変数などはメモリ上に配置した★に保存される。",
      answer: "スタック"
    },
    {
      question_number: "Q4",
      question: "関数の引数や局所変数などの読み書きでは、ベースポインタを基準として★で保存場所を指定する。",
      answer: "相対番地"
    },
    {
      question_number: "Q5",
      question: "あるオブジェクトの★とはそのオブジェクトを参照することが可能なプログラム内の範囲である。",
      answer: "スコープ"
    },
    {
      question_number: "Q6",
      question: "if文では★命令で分岐を実現する。",
      answer: "条件付きジャンプ"
    },
    {
      question_number: "Q7",
      question: "あるオブジェクトの定義が現れる前にそのオブジェクトを参照することを★という。",
      answer: "前方参照"
    },
    {
      question_number: "Q8",
      question: "プログラム中である名前でオブジェクトを参照すると、その場所から最も★のスコープのオブジェクトに対応づける。",
      answer: "内側"
    },
    {
      question_number: "Q9",
      question: "変数を使用する際は、メモリから★に値をうつして演算命令を実行する。",
      answer: "レジスタ"
    },
    {
      question_number: "Q10",
      question: "★空間とは★が示すオブジェクトを検索するための検索空間である。",
      answer: "名前"
    }
  ],
  "コンパイラ：文脈自由文法": [
    {
      question_number: "Q1",
      question: "ある記号Aから記号列αを生成する規則をA ★ αと表記する。",
      answer: "→"
    },
    {
      question_number: "Q2",
      question: "★記号のみからなる記号列を文という。",
      answer: "終端"
    },
    {
      question_number: "Q3",
      question: "生成規則の左辺に現れることのない記号を★記号という。",
      answer: "終端"
    },
    {
      question_number: "Q4",
      question: "記号列αに生成規則を0回以上適用して記号列βが得られるとき、βはαに★されるという。",
      answer: "還元"
    },
    {
      question_number: "Q5",
      question: "文法は生成規則の集合と★記号によって定められる。",
      answer: "出発"
    },
    {
      question_number: "Q6",
      question: "最右導出では記号列中の最も右の★記号に生成規則を適用する。",
      answer: "非終端"
    },
    {
      question_number: "Q7",
      question: "★とは、出発記号から文が導出される様子を図で表現したものである。",
      answer: "解析木"
    },
    {
      question_number: "Q8",
      question: "記号列αに生成規則を何回か適用して記号列βを求めることを、αからβを★するという。",
      answer: "導出"
    },
    {
      question_number: "Q9",
      question: "記号列αに生成規則を0回以上適用して記号列βが得られるとき、αはβを★するという。",
      answer: "生成"
    },
    {
      question_number: "Q10",
      question: "記号列αに生成規則を適用して記号列βが得られるとき、α ★ βと表記する。",
      answer: "⇒"
    }
  ],
  "コンパイラ：概要": [
    {
      question_number: "Q1",
      question: "コンパイラにおいてより高速にまたはより短く動作するようにコードを変更する処理を★という。",
      answer: "最適化"
    },
    {
      question_number: "Q2",
      question: "コンパイラにおいて名前と構成要素の対応付けと型チェックを行う処理を★という。",
      answer: "意味解析"
    },
    {
      question_number: "Q3",
      question: "コンパイラにおいて目的の動作をするアセンブリプログラムを作成する処理を★という。",
      answer: "コード生成"
    },
    {
      question_number: "Q4",
      question: "Cコンパイラではまず★がヘッダファイルの読み込みやマクロ展開などの前処理を行う。",
      answer: "プリプロセッサ"
    },
    {
      question_number: "Q5",
      question: "コンパイラにおいてソースコードを識別子やキーワードなどの文字列にわける処理を★という。",
      answer: "字句解析"
    },
    {
      question_number: "Q6",
      question: "ソースコードを予め機械語に翻訳するのではなく、解釈しながら実行する方式を★方式という。",
      answer: "インタープリタ"
    },
    {
      question_number: "Q7",
      question: "★はアセンブリプログラムから機械語プログラムを生成する。",
      answer: "アセンブラ"
    },
    {
      question_number: "Q8",
      question: "コンパイラにおいて文法に従ってプログラムの構造を解釈する処理を★という。",
      answer: "構文解析"
    },
    {
      question_number: "Q9",
      question: "ターゲットマシンと異なる計算機でコンパイルすることを★コンパイルという。",
      answer: "クロス"
    },
    {
      question_number: "Q10",
      question: "★はオブジェクトプログラムとライブラリ群を結合し実行形式を生成する。",
      answer: "リンカ"
    }
  ],
  "コンパイラ：構文解析": [
    {
      question_number: "Q1",
      question: "LL法およびLR構文解析では、複数の選択肢がある状況でも★により適切な選択ができる。",
      answer: "先読み"
    },
    {
      question_number: "Q2",
      question: "LL構文解析では★な順に構文解析をすすめる。",
      answer: "最左導出"
    },
    {
      question_number: "Q3",
      question: "★構文解析では記号列を読み進め還元しながらボトムアップに解析木を構築していく。",
      answer: "LR"
    },
    {
      question_number: "Q4",
      question: "構文要素に対応する字句要素について、その文字列・種類・付加情報などをまとめたデータを★と呼ぶ。",
      answer: "トークン"
    },
    {
      question_number: "Q5",
      question: "★構文解析では再帰的に生成規則を適用しながらトップダウンに解析木を構築していく。",
      answer: "LL"
    },
    {
      question_number: "Q6",
      question: "入力トークン列全体が★に還元できたとき構文解析は成功し、できなければ構文エラーとなる。",
      answer: "出発記号"
    },
    {
      question_number: "Q7",
      question: "LR構文解析では★順に構文解析をすすめる。",
      answer: "最右導出の逆"
    },
    {
      question_number: "Q8",
      question: "SLR（1）、LR（1）、LALR（1）構文解析では、解析の手順は同じだが★表が異なる。",
      answer: "動作"
    },
    {
      question_number: "Q9",
      question: "複数の選択肢がある状況で、ある選択をしてその先で失敗したとき選択前の状態に戻す処理を★という。",
      answer: "バックトラック"
    },
    {
      question_number: "Q10",
      question: "生成規則に左再帰があると★構文解析は適用できない。",
      answer: "LL"
    }
  ],
  "基礎確認：Cプログラミング": [
    {
      question_number: "Q1",
      question: "異なる複数のデータをひとつにまとめたデータ型を★という。",
      answer: "構造体  "
    },
    {
      question_number: "Q2",
      question: "#★によって定数を定義することができる。",
      answer: "define"
    },
    {
      question_number: "Q3",
      question: "関数呼出時に関数に与える入力を★という。",
      answer: "引数  "
    },
    {
      question_number: "Q4",
      question: "データを格納している場所を示すデータ型を★という。",
      answer: "ポインタ"
    },
    {
      question_number: "Q5",
      question: "プログラム中のどこからでも参照できる変数を★変数という。",
      answer: "global"
    },
    {
      question_number: "Q6",
      question: "実行中の関数やブロックの中からだけ参照できる変数を★変数という。",
      answer: "local  "
    },
    {
      question_number: "Q7",
      question: "関数終了時に呼出元に渡す値を★という。",
      answer: "戻り値  "
    },
    {
      question_number: "Q8",
      question: "プログラム中である変数を参照できる範囲をその変数の★という。",
      answer: "スコープ  "
    },
    {
      question_number: "Q9",
      question: "#★によってプログラム中に別のプログラムコードを展開することができる。",
      answer: "include"
    },
    {
      question_number: "Q10",
      question: "条件式では計算結果が★のとき真となる。",
      answer: "0以外  "
    }
  ],
  "基礎確認：コンピュータ・アーキテクチャ": [
    {
      question_number: "Q1",
      question: "演算命令の対象レジスタなど、命令における操作対象を★という。",
      answer: "オペランド  "
    },
    {
      question_number: "Q2",
      question: "ある特定のレジスタが示すアドレスを基準にそこからの変位で示すアドレスを★アドレスという。",
      answer: "相対  "
    },
    {
      question_number: "Q3",
      question: "CPU内で加減算や論理演算を実行する部分を★という。",
      answer: "ALU  "
    },
    {
      question_number: "Q4",
      question: "命令語のビット列内で命令種別や操作対象などを示すそれぞれの部分を★と呼ぶ。",
      answer: "フィールド  "
    },
    {
      question_number: "Q5",
      question: "特定のレジスタの値や直前の計算結果に依存して分岐する命令を★分岐という。",
      answer: "条件  "
    },
    {
      question_number: "Q6",
      question: "★命令はメモリやレジスタからレジスタにデータをコピーする命令である。",
      answer: "load  "
    },
    {
      question_number: "Q7",
      question: "IP（またはPC）レジスタは実行する命令の★を保持している。",
      answer: "アドレス  "
    },
    {
      question_number: "Q8",
      question: "★命令はレジスタからメモリにデータをコピーする命令である。",
      answer: "store  "
    },
    {
      question_number: "Q9",
      question: "サブルーチン呼出命令ではジャンプすると同時に★アドレスをスタック（または特定のレジスタ）に保存する。",
      answer: "呼出元  "
    },
    {
      question_number: "Q10",
      question: "メモリとレジスタでは、★の方が読み書きが速い。",
      answer: "レジスタ"
    }
  ],
  "基礎確認：木・スタック・キュー": [
    {
      question_number: "Q1",
      question: "スタックからデータを取り出す動作を★という。",
      answer: "pop  "
    },
    {
      question_number: "Q2",
      question: "スタックでは★に入れたデータが先に取り出される。",
      answer: "後  "
    },
    {
      question_number: "Q3",
      question: "節点数nの完全二分木の高さは★である。",
      answer: "底2の対数log₂(n)の切捨  "
    },
    {
      question_number: "Q4",
      question: "根付き木の隣接するふたつの節点に対して根に近い側を★という。",
      answer: "親  "
    },
    {
      question_number: "Q5",
      question: "キューでは★に入れたデータが先に取り出される。",
      answer: "先  "
    },
    {
      question_number: "Q6",
      question: "スタックにデータを入れる動作を★という。",
      answer: "push  "
    },
    {
      question_number: "Q7",
      question: "根付き木の高さ（深さ）は根から葉までの枝数の★である。",
      answer: "最大値  "
    },
    {
      question_number: "Q8",
      question: "根付き木の隣接するふたつの節点に対して根から遠い側を★という。",
      answer: "子  "
    },
    {
      question_number: "Q9",
      question: "訪問した節点の子をキューに入れて順次探索すると★になる。",
      answer: "幅優先探索  "
    },
    {
      question_number: "Q10",
      question: "訪問した節点の子をスタックに入れて順次探索すると★になる。",
      answer: "深さ優先探索  "
    }
  ],
  "基礎確認：集合と論理": [
    {
      question_number: "Q1",
      question: "条件Aが任意のxについて成立するとき「★x, A」と表記する。",
      answer: "∀"
    },
    {
      question_number: "Q2",
      question: "条件Aと条件Bのどちらかが成立する条件を「A ★ B」と表記する。",
      answer: "∨"
    },
    {
      question_number: "Q3",
      question: "集合Xと集合Yの和集合を「X ★ Y」と表記する。",
      answer: "∪"
    },
    {
      question_number: "Q4",
      question: "条件Aと条件Bがどちらも成立する条件を「A ★ B」と表記する。",
      answer: "∧"
    },
    {
      question_number: "Q5",
      question: "xが集合Xの要素であるとき「x ★ X」と表記する。",
      answer: "∈"
    },
    {
      question_number: "Q6",
      question: "条件Aが成立するxが存在するとき「★x, A」と表記する。",
      answer: "∃"
    },
    {
      question_number: "Q7",
      question: "集合Xと集合Yの積集合を「X ★ Y」と表記する。",
      answer: "∩"
    },
    {
      question_number: "Q8",
      question: "集合Yが集合Xの部分集合であるとき「Y ★ X」と表記する。",
      answer: "⊂"
    },
    {
      question_number: "Q9",
      question: "条件Aが成立しないという条件を「★A」と表記する。",
      answer: "￢"
    },
    {
      question_number: "Q10",
      question: "要素数0の集合を空集合と呼び「★」と表記する。",
      answer: "Φ"
    }
  ]
};