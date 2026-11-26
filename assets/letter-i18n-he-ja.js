/* English is the source. Official names, ranks and Masonic terms are retained. */
(function () {
"use strict";
var E = window.NGLG_LETTER.en;
var names = {fGL:E.fGL,fGS:E.fGS,fGM:E.fGM,phGS:E.phGS,phGM:E.phGM,
  orgName:E.orgName,signer:E.signer,signerRole:E.signerRole,
  gmRole:E.gmRole,gsRole:E.gsRole,ngmName:E.ngmName};
window.NGLG_LETTER.he = Object.assign({}, names, {
  htmlLang:"he", docTitle:"בקשה ל-Mutual Recognition — National Grand Lodge of Greece",
  back:"התיק", exportPdf:"ייצוא המכתב ל-PDF", fLogo:"סמל", logoBtn:"העלאת סמל", logoRemove:"הסרה", fPlace:"עיר, מדינה", fRef:"סימוכין", phGL:"לדוגמה: Grand Lodge of …", phPlace:"לדוגמה: עיר, מדינה",
  hint:"מלאו את פרטי הנמען והעלו את סמל ה-Grand Lodge שלו. הכול נשמר בדפדפן זה בלבד.",
  orgSub:"לשכת ה-Grand Secretary", est:"נוסדה", estPlace:"אתונה", orgAddr:"אתונה, יוון · www.nglgreece.org · grand.secretary@nglgreece.gr", refLabel:"סימוכין",
  to:"לכבוד ה-Right Worshipful Grand Secretary", subject:"בקשה ל-Mutual Recognition ולחילופי Grand Representatives", salutation:"Right Worshipful Brother Grand Secretary ואח יקר,",
  body:[
    "במצוות ה-Most Worshipful Grand Master של National Grand Lodge of Greece, <strong>MW Bro. Ioannis Benetatos</strong>, יש לי הכבוד והזכות לפנות אליך, ובאמצעותך אל <strong>{GL}</strong>, בברכות חמות ואחוותיות מאתונה. אודה לך מאוד אם תואיל למסור את ברכותיו הלבביות והאחוותיות של ה-Grand Master שלנו אל {GM}.",
    "National Grand Lodge of Greece כוננה באתונה ב-<strong>7 ביוני 1986</strong> בידי שש Craft Lodges בעלות כתבי הסמכה תקפים, הרבה מעבר למינימום של שלוש הנדרש ב-Basic Principles for Grand Lodge Recognition. מאז אותו יום היא מנהלת את ה-Craft ברצף בלתי פוסק של ארבעה-עשר Grand Masters, על פי Book of Constitutions המבוסס על זה של United Grand Lodge of England, ותוך הקפדה על ה-Antient Landmarks, המנהגים והנוהגים של ה-Order.",
    "ה-Regularity שלנו אושרה בידי ה-Home Grand Lodges. ‏United Grand Lodge of England הכירה ב-National Grand Lodge of Greece ב-1993, ‏Grand Lodge of Ireland ב-1994 ו-Grand Lodge of Scotland ב-1995; ההכרות של אירלנד וסקוטלנד נמשכות ללא הפסקה עד היום. National Grand Lodge of Greece מקיימת כיום Mutual Recognition ויחסי אחווה עם <strong>102 Regular Grand Lodges ו-Grand Orients</strong> ברחבי העולם.",
    "ברוח זו אני מבקש בכבוד, בשם National Grand Lodge of Greece, כי <strong>{GL}</strong> תואיל לשקול כינון <strong>Mutual Recognition ויחסי אחווה</strong> בין שתי ה-Grand Lodges שלנו, ולאחר הכרה זו, <strong>מינוי הדדי של Grand Representatives</strong>, כל אחד אצל רעותה, לשם קידום התכתבות, ביקורים וידידות מתמשכת בין ה-Brethren שלנו. אודה לך אם תואיל להביא בקשה זו בפני {GM} והגופים המוסמכים של ה-Grand Lodge שלך.",
    "לעיון ה-Grand Lodge שלך אני מצרף את התיק שלנו, <em>Origin and Regularity of the National Grand Lodge of Greece</em>, המציג את יסודנו החוקתי, העקרונות שאנו מקיימים, ממשלנו ומרשם ההכרות שלנו, וכן הצעה ל-Instrument of Mutual Recognition. הרשומות המקוריות נשמרות ב-Grand Secretariat שלנו ועומדות לעיונו של כל נציג שמונה כדין בידי ה-Grand Lodge שלך ויבקש לבחון אותן באתונה.",
    "לכבוד גדול ייחשב לנו לארח אותך ואת ה-Brethren שלך ביוון, הארץ שבה האיר לראשונה אור הפילוסופיה, ואנו מתפללים כי ה-Great Architect of the Universe יוסיף לברך את עבודת ה-Grand Lodge שלך ואת כל ה-Brethren שלה."
  ],
  closing:"ברגשי הערכה אחוותית עמוקים, הנני, Right Worshipful Brother,", yourGM:"ה-Most Worshipful Grand Master שלך", yourGMn:"ה-Most Worshipful Grand Master שלך, {n}", closing2:"בכנות ובאחווה,", byCommand:"במצוות ה-Most Worshipful Grand Master", enclTitle:"מצורפים", encl:["תיק — Origin and Regularity of the National Grand Lodge of Greece","מרשם 102 ה-Mutual Recognitions","הצעה ל-Instrument of Mutual Recognition and Exchange of Grand Representatives"],
  annexKicker:"נספח", annexTitle:"Instrument of Mutual Recognition and Exchange of Grand Representatives",
  annexIntro:"<strong>National Grand Lodge of Greece</strong> ו-<strong>{GL}</strong>, לאחר שכל אחת השתכנעה שרעותה היא Regular Grand Lodge ריבונית ועצמאית, המקיימת את ה-Basic Principles for Grand Lodge Recognition, הסכימו כדלקמן:",
  articles:[
    ["Mutual Recognition","כל Grand Lodge מעניקה לרעותה Mutual Recognition מלאה ויחסי אחווה, החל במועד שבו ייחתם מסמך זה בידי שני הצדדים."],
    ["Intervisitation","ה-Brethren של כל Grand Lodge, הנמצאים ב-good standing ושזוהו ואושרו כדין או נבחנו, רשאים לבקר ב-Lodges של רעותה בהתאם לחוקתה ולתקנותיה."],
    ["Grand Representatives","כל Grand Lodge תמנה Grand Representative אצל רעותה, אשר יקדם את ההתכתבות ואת יחסי האחווה בין שתי ה-Grand Lodges."],
    ["Sovereign Jurisdiction","כל Grand Lodge מכבדת את סמכותה הריבונית והבלעדית של רעותה על ה-Lodges שלה ועל חבריה, ולא תכונן Lodges בשטחה של רעותה ללא הסכמתה."],
    ["תקשורת","כל Grand Lodge תיידע את רעותה על כל שינוי בחוקתה או בנסיבותיה העלול להשפיע על ה-Regularity שלה או על תנאי מסמך זה."]
  ],
  annexClose:"נערך בשני עותקים מקוריים, וכל Grand Lodge תשמור עותק אחד.", forNGLG:"בשם National Grand Lodge of Greece", forGL:"בשם {GL}", placeDate:"מקום ותאריך", seal:"חותמת", runFooter:"National Grand Lodge of Greece · לשכת ה-Grand Secretary · RW. Bro Dimitrios Skiadopoulos"
});
window.NGLG_LETTER.ja = Object.assign({}, names, {
  htmlLang:"ja", docTitle:"Mutual Recognitionの申請 — National Grand Lodge of Greece", back:"資料", exportPdf:"書簡をPDFで書き出す", fLogo:"紋章", logoBtn:"紋章をアップロード", logoRemove:"削除", fPlace:"都市・国", fRef:"参照番号", phGL:"例：Grand Lodge of …", phPlace:"例：都市・国", hint:"宛先を入力し、相手のGrand Lodgeの紋章をアップロードしてください。内容はこのブラウザのみに保存されます。", orgSub:"Grand Secretary事務局", est:"設立", estPlace:"アテネ", orgAddr:"ギリシャ・アテネ · www.nglgreece.org · grand.secretary@nglgreece.gr", refLabel:"参照番号", to:"Right Worshipful Grand Secretary 御中", subject:"Mutual RecognitionおよびGrand Representatives交換の申請", salutation:"Right Worshipful Brother Grand Secretary、親愛なるBrotherへ",
  body:[
    "National Grand Lodge of GreeceのMost Worshipful Grand Master、<strong>MW Bro. Ioannis Benetatos</strong>の命により、アテネから温かな兄弟的挨拶とともに、貴殿、そして貴殿を通じて<strong>{GL}</strong>にお便りする栄誉にあずかります。私たちのGrand Masterからの心のこもった兄弟的挨拶を{GM}にお伝えいただければ、誠に幸いです。",
    "National Grand Lodge of Greeceは<strong>1986年6月7日</strong>、正規の設立許可状を有する6つのCraft Lodgesによってアテネで設立されました。これはBasic Principles for Grand Lodge Recognitionが求める最低数3を十分に上回ります。以来、14人のGrand Mastersによる途切れない継承のもと、United Grand Lodge of Englandのものに基づくBook of Constitutionsに従い、Antient Landmarks、Orderの慣習と慣行を厳格に遵守してCraftを統治してきました。",
    "私たちのRegularityはHome Grand Lodgesによって確認されています。United Grand Lodge of Englandは1993年に、Grand Lodge of Irelandは1994年に、Grand Lodge of Scotlandは1995年にNational Grand Lodge of GreeceをRecognitionしました。アイルランドとスコットランドのRecognitionは今日まで途切れることなく続いています。National Grand Lodge of Greeceは現在、世界の<strong>102のRegular Grand LodgesおよびGrand Orients</strong>とMutual Recognitionおよび兄弟的なamityを有しています。",
    "この精神に基づき、National Grand Lodge of Greeceを代表し、<strong>{GL}</strong>に対して、私たちの2つのGrand Lodgesの間で<strong>Mutual Recognitionおよび兄弟的関係</strong>を確立し、そのRecognitionの後に、互いのGrand Lodgeに<strong>Grand Representativesを相互に任命すること</strong>をご検討いただくよう、謹んで申請いたします。これによりBrethren間の書簡、訪問、永続的な友情を促進したく存じます。本申請を{GM}および貴Grand Lodgeの権限ある機関にご提出いただければ幸いです。",
    "貴Grand Lodgeでのご検討のため、私たちの憲法上の基盤、遵守する原則、統治、Recognitionの登録簿を示す資料<em>Origin and Regularity of the National Grand Lodge of Greece</em>と、Instrument of Mutual Recognitionの提案を同封いたします。原記録は私たちのGrand Secretariatに保管されており、貴Grand Lodgeが正式に任命する代表者がアテネで閲覧を希望される場合は、ご覧いただけます。",
    "哲学の光が初めて輝いた地ギリシャに、貴殿と貴殿のBrethrenをお迎えできれば、大きな栄誉です。Great Architect of the Universeが、貴Grand LodgeとそのすべてのBrethrenの営みを引き続き祝福されますよう祈念いたします。"
  ],
  closing:"Right Worshipful Brotherへ、深い兄弟的敬意を込めて", yourGM:"貴Most Worshipful Grand Master", yourGMn:"貴Most Worshipful Grand Master、{n}", closing2:"誠意と兄弟愛を込めて", byCommand:"Most Worshipful Grand Masterの命により", enclTitle:"同封資料", encl:["資料 — Origin and Regularity of the National Grand Lodge of Greece","102のMutual Recognitionsの登録簿","Instrument of Mutual Recognition and Exchange of Grand Representativesの提案"], annexKicker:"付属書", annexTitle:"Instrument of Mutual Recognition and Exchange of Grand Representatives", annexIntro:"<strong>National Grand Lodge of Greece</strong>と<strong>{GL}</strong>は、互いがBasic Principles for Grand Lodge Recognitionを遵守する、Regularかつ主権を有する独立したGrand Lodgeであることを確認し、次のとおり合意しました。",
  articles:[
    ["Mutual Recognition","各Grand Lodgeは、本書に両当事者が署名した日から、相手に完全なMutual Recognitionと兄弟的なamityを与えます。"],
    ["Intervisitation","各Grand LodgeのBrethrenは、good standingにあり、正式な身元保証または審査を受けている場合、相手の憲法および規則に従って、そのLodgesを訪問できます。"],
    ["Grand Representatives","各Grand Lodgeは相手のGrand LodgeにGrand Representativeを任命し、その者は両Grand Lodges間の書簡および兄弟的関係を促進します。"],
    ["Sovereign Jurisdiction","各Grand Lodgeは、相手が自らのLodgesおよび会員に有する主権に基づく排他的管轄権を尊重し、相手の同意なしにその領域内にLodgesを設立しません。"],
    ["連絡","各Grand Lodgeは、そのRegularityまたは本書の条件に影響し得る、憲法または状況の変更を相手に通知します。"]
  ], annexClose:"原本2通を作成し、各Grand Lodgeが1通ずつ保管します。", forNGLG:"National Grand Lodge of Greeceを代表して", forGL:"{GL}を代表して", placeDate:"場所および日付", seal:"印章", runFooter:"National Grand Lodge of Greece · Grand Secretary事務局 · RW. Bro Dimitrios Skiadopoulos"
});
})();
