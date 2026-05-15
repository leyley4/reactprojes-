// src/data/tests.ts
export const quizData = [
  {
    id: 1,
    title: "React Genel Seviye Testi - 1",
    description: "React temelleri, JSX yapısı ve bileşen mantığı üzerine genel bir değerlendirme testi.",
    questions: [
      {
        question: "React hangi şirket tarafından geliştirilmiştir?",
        options: ["Google", "Twitter", "Meta (Facebook)", "Amazon"],
        correctAnswer: "Meta (Facebook)"
      },
      {
        question: "JSX içinde JavaScript kodu yazmak için hangi parantez kullanılır?",
        options: ["Süslü Parantez {}", "Köşeli Parantez []", "Normal Parantez ()", "Tırnak İşareti ''"],
        correctAnswer: "Süslü Parantez {}"
      }
    ]
  },
  {
    id: 2,
    title: "React Hooks & State Testi - 2",
    description: "useState ve useEffect gibi modern React özelliklerini ölçen teknik bir test.",
    questions: [
      {
        question: "Bileşen ekrana ilk geldiğinde bir kez işlem yapmak için hangi bağımlılık dizisi (dependency array) kullanılır?",
        options: ["Dizi eklenmez", "Dolu dizi [data]", "Boş dizi []", "null"],
        correctAnswer: "Boş dizi []"
      },
      {
        question: "Bir 'counter' (sayaç) state'ini güncellerken, mevcut değerin üzerine 1 eklemek için en güvenli yöntem hangisidir?",
        options: [
          "setCount(count + 1)", 
          "setCount(prev => prev + 1)", 
          "count = count + 1", 
          "setCount(1)"
        ],
        correctAnswer: "setCount(prev => prev + 1)"
      }
    ]

  }
];