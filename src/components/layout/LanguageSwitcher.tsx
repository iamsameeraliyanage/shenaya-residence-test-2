"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    if (currentLocale === newLocale) return;

    const segments = pathname.split("/");
    let pathWithoutLocale = "";

    if (segments.length > 1 && segments[1] === currentLocale) {
      pathWithoutLocale = segments.slice(2).join("/");
    } else {
      pathWithoutLocale = segments.slice(1).join("/");
    }

    const newPath = pathWithoutLocale ? `/${newLocale}/${pathWithoutLocale}` : `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 sm:p-4">
      <span className="text-sm sm:text-base text-gray-600 mr-2">Language:</span>

      {/* English Button */}
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium rounded transition duration-200 ${
          currentLocale === "en" ? "text-white" : "hover:bg-yellow-50 border"
        }`}
        style={
          currentLocale === "en"
            ? { backgroundColor: "#B09244" }
            : { color: "#B09244", borderColor: "#B09244" }
        }
      >
        EN
      </button>

      {/* German Button */}
      <button
        onClick={() => switchLanguage("de")}
        className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base font-medium rounded transition duration-200 ${
          currentLocale === "de" ? "text-white" : "hover:bg-yellow-50 border"
        }`}
        style={
          currentLocale === "de"
            ? { backgroundColor: "#B09244" }
            : { color: "#B09244", borderColor: "#B09244" }
        }
      >
        DE
      </button>
    </div>
  );
}
