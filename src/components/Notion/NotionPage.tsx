"use client";

import { notionApi } from "@/utils/notion/notion-api";
import Head from "next/head";
import { type ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import Loading from "./Loading";

type NotionPageProps = {
  pageId: string;
  recordMap?: ExtendedRecordMap;
  rootPageId?: string;
};

export function NotionPage({ pageId, recordMap, rootPageId }: NotionPageProps) {
  const [record, setRecord] = useState<ExtendedRecordMap | undefined>(
    recordMap
  );
  const title = record ? getPageTitle(record) : "Loading...";

  useEffect(() => {
    if (!recordMap) {
      const fetchRecordMap = async () => {
        try {
          const res = await notionApi.getPage(pageId);
          setRecord(res);
        } catch (error) {
          console.error("Failed to fetch Notion page:", error);
        }
      };

      fetchRecordMap();
    }
  }, [pageId, recordMap]);

  if (!record) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />
        <title>{title}</title>
      </Head>

      <NotionRenderer
        recordMap={record}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </>
  );
}
