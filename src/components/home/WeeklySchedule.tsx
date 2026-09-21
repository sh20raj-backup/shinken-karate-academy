import React, { useState } from "react";
import { Clock, User } from "lucide-react";
import { SCHEDULE_DATA } from "../../data/academyData";

export const WeeklySchedule: React.FC = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const [selectedDay, setSelectedDay] = useState("Monday");

  const currentClasses = SCHEDULE_DATA[selectedDay] || [];

  return (
    <section className="py-24 bg-dojo-bg border-t border-dojo-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-dojo-gold bg-dojo-gold/10 px-3 py-1 rounded-full border border-dojo-gold/20 inline-block mb-3">
            CLASS TIMINGS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Weekly Schedule
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dojo-muted">
            Find a training slot that fits your routine. Beginner, intermediate, and black belt cohorts available daily.
          </p>
        </div>

        {/* Day of week filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {days.map((day) => {
            const active = selectedDay === day;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  active
                    ? "bg-dojo-red text-white shadow-lg shadow-dojo-red/30 scale-105"
                    : "bg-dojo-card text-dojo-muted hover:text-white border border-dojo-border hover:bg-dojo-surface"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule Table / Cards */}
        <div className="space-y-4">
          {currentClasses.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-2xl bg-dojo-card border border-dojo-border hover:border-dojo-gold/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm font-bold text-white shrink-0">
                  <Clock className="w-4 h-4 text-dojo-gold" />
                  <span>{item.time}</span>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${item.color}`}>
                  {item.level}
                </span>
              </div>

              <div className="flex-1 sm:text-center">
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {item.course}
                </h4>
              </div>

              <div className="flex items-center gap-2 text-xs text-dojo-muted shrink-0">
                <User className="w-3.5 h-3.5 text-dojo-red" />
                <span>Coach: <strong className="text-white">{item.coach}</strong></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
