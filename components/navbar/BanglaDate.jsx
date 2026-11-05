"use client";

import { useSyncExternalStore } from "react";

const dateFormatter = new Intl.DateTimeFormat("bn-BD", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Dhaka",
});

// date change
const subscribe = () => () => {};
const getTodayText = () => dateFormatter.format(new Date());
const getServerText = () => "";

export default function BanglaDate({ className = "" }) {
  const today = useSyncExternalStore(subscribe, getTodayText, getServerText);

  return <span className={className}>{today || "\u00A0"}</span>;
}