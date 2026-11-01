interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Injects FAQ structured data as JSON-LD into the page head
 * Call this inside a useEffect in your component
 */
export const injectFAQSchema = (faqs: FAQItem[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const scriptId = 'faq-schema';
  let script = document.getElementById(scriptId) as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

export const removeFAQSchema = () => {
  const script = document.getElementById('faq-schema');
  if (script) script.remove();
};

interface ServiceItem {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string;
  price?: string;
  currency?: string;
}

/**
 * Injects Service structured data as JSON-LD into the page head
 * Call this inside a useEffect in your component
 */
export const injectServiceSchema = (services: ServiceItem[]) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Health and Wellness",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Neuro-Somatic Kinesiology Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          serviceType: service.serviceType,
          areaServed: service.areaServed,
          provider: {
            "@type": "LocalBusiness",
            name: "Daniele Buatti - Resonance Kinesiology"
          }
        },
        ...(service.price && {
          price: service.price,
          priceCurrency: service.currency || "AUD",
          availability: "https://schema.org/InStock"
        })
      }))
    }
  };

  const scriptId = 'service-schema';
  let script = document.getElementById(scriptId) as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

export const removeServiceSchema = () => {
  const script = document.getElementById('service-schema');
  if (script) script.remove();
};

interface EventItem {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  url: string;
  image?: string;
  offers?: {
    price: string;
    currency: string;
    availability: string;
    url: string;
  }[];
}

/**
 * Injects Event structured data as JSON-LD into the page head
 * Call this inside a useEffect in your component
 */
export const injectEventSchema = (events: EventItem[]) => {
  const schema = events.map(event => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Resonance Kinesiology - Toorak Practice",
      address: {
        "@type": "PostalAddress",
        streetAddress: "685 Toorak Rd",
        addressLocality: "Toorak",
        addressRegion: "Victoria",
        postalCode: "3144",
        addressCountry: "AU"
      }
    },
    image: event.image,
    organizer: {
      "@type": "Person",
      name: "Daniele Buatti",
      url: "https://kinesiology.danielebuatti.com/"
    },
    offers: event.offers || [],
    performer: {
      "@type": "Person",
      name: "Daniele Buatti"
    }
  }));

  const scriptId = 'event-schema';
  let script = document.getElementById(scriptId) as HTMLScriptElement;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema.length === 1 ? schema[0] : schema);
};

export const removeEventSchema = () => {
  const script = document.getElementById('event-schema');
  if (script) script.remove();
};