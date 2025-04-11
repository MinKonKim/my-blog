// components/ClientNotionRenderer.tsx
"use client";

import { NotionRenderer } from "react-notion-x";
import dynamic from "next/dynamic";
import "react-notion-x/src/styles.css"; // 기본 스타일
import "prismjs/themes/prism-tomorrow.css"; // 코드 블록 스타일
import Loading from "./Loading";

// 코드 블록 같은 컴포넌트를 동적으로 불러옵니다.
const Code = dynamic(
  () => import("react-notion-x/build/third-party/code").then((mod) => mod.Code),
  { ssr: false }
);

const Collection = dynamic(
  () =>
    import("react-notion-x/build/third-party/collection").then(
      (mod) => mod.Collection
    ),
  { ssr: false }
);

const Equation = dynamic(
  () =>
    import("react-notion-x/build/third-party/equation").then(
      (mod) => mod.Equation
    ),
  { ssr: false }
);

const Pdf = dynamic(
  () => import("react-notion-x/build/third-party/pdf").then((mod) => mod.Pdf),
  { ssr: false }
);

const Modal = dynamic(
  () =>
    import("react-notion-x/build/third-party/modal").then((mod) => mod.Modal),
  { ssr: false }
);

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recordMap: any;
};

export default function ClientNotionRenderer({ recordMap }: Props) {
  if (!recordMap) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="notion-container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        components={{
          Code,
          Collection,
          Equation,
          Pdf,
          Modal,
        }}
      />
    </div>
  );
}
