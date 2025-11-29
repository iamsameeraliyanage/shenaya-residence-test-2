export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQPageContent {
  title: string;
  subtitle: string;
}

export const faqPageContent: FAQPageContent = {
  title: 'Häufig gestellte Fragen',
  subtitle: 'Finden Sie Antworten auf häufige Fragen über Ihren Aufenthalt in der Shenaya Residenz. Falls Sie nicht finden, wonach Sie suchen, kontaktieren Sie uns gerne direkt.'
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Was sind die Check-in und Check-out Zeiten?",
    answer: "Check-in ist ab 14:00 Uhr und Check-out bis 11:00 Uhr. Früher Check-in und später Check-out können auf Anfrage arrangiert werden, je nach Verfügbarkeit."
  },
  {
    id: 2,
    question: "Können Sie spezielle Ernährungsanforderungen berücksichtigen?",
    answer: "Ja, wir können verschiedene Ernährungsanforderungen berücksichtigen, einschließlich vegetarischer, veganer, glutenfreier und anderer spezieller Ernährungsbedürfnisse. Bitte informieren Sie uns bei der Buchung über spezielle Anforderungen."
  },
  {
    id: 3,
    question: "Bieten Sie Flughafentransport an?",
    answer: "Ja, wir bieten Flughafen-Abhol- und Bringservice gegen Aufpreis an. Bitte kontaktieren Sie uns mindestens 24 Stunden im Voraus, um Transport zu arrangieren."
  },
  {
    id: 4,
    question: "Was ist im Zimmerpreis inbegriffen?",
    answer: "Zimmerpreise beinhalten kostenloses Frühstück, WLAN-Zugang, Klimaanlage, tägliche Zimmerreinigung und Zugang zu allen Hoteleinrichtungen einschließlich Garten und Gemeinschaftsbereichen."
  },
  {
    id: 5,
    question: "Welche Aktivitäten sind im Aufenthalt inbegriffen?",
    answer: "Wir bieten kostenlose Aktivitäten wie geführte Gartentouren, kulturelle Orientierungssitzungen und Unterstützung bei der Buchung lokaler Attraktionen. Zusätzliche Aktivitäten können gegen Gebühr arrangiert werden."
  },
  {
    id: 6,
    question: "Wie mache ich eine Reservierung?",
    answer: "Sie können eine Reservierung über unsere Website, durch direkten Anruf oder per E-Mail machen. Wir empfehlen im Voraus zu buchen, besonders während der Hochsaison."
  },
  {
    id: 7,
    question: "Ist WLAN im gesamten Anwesen verfügbar?",
    answer: "Ja, kostenloses Hochgeschwindigkeits-WLAN ist im gesamten Anwesen verfügbar, einschließlich aller Zimmer, Gemeinschaftsbereiche und Außenbereiche."
  },
  {
    id: 8,
    question: "Gibt es ein Spa oder Wellnesszentrum?",
    answer: "Wir bieten Wellness-Services einschließlich traditioneller sri-lankischer Ayurveda-Behandlungen, Massage-Services und Yoga-Stunden. Bitte kontaktieren Sie unsere Rezeption für Terminvereinbarungen."
  },
  {
    id: 9,
    question: "Welche Speisemöglichkeiten gibt es?",
    answer: "Wir bieten authentische sri-lankische Küche, kontinentale Frühstücksoptionen und können spezielle Speise-Erlebnisse arrangieren. Zimmerservice ist auch während festgelegter Stunden verfügbar."
  },
  {
    id: 10,
    question: "Wie lautet Ihre Stornierungsrichtlinie?",
    answer: "Stornierungen und Änderungen können bis zu 48 Stunden vor Ihrem Ankunftsdatum ohne Strafe vorgenommen werden. Bitte kontaktieren Sie uns direkt, um Ihre spezielle Situation zu besprechen."
  },
  {
    id: 11,
    question: "Sind Haustiere erlaubt?",
    answer: "Wir begrüßen gut erzogene Haustiere mit vorheriger Genehmigung. Bitte informieren Sie uns während der Buchung über Ihr Haustier, zusätzliche Gebühren können für Reinigung und Wartung anfallen."
  },
  {
    id: 12,
    question: "Welche Attraktionen sind in der Nähe?",
    answer: "Wir befinden uns günstig in der Nähe der wichtigsten Kandy-Attraktionen, einschließlich des Zahntempels, Kandy-Sees, Königlicher Botanischer Garten und verschiedener kultureller Stätten. Unser Personal kann bei der Anordnung von Touren und Transport helfen."
  }
];
