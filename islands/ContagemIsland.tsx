
import { signal, computed } from '@preact/signals';

export default function ContagemIsland() {
    const targetDate = new Date('2025-10-03T00:00:00');
    const timeLeft = signal(targetDate.getTime() - Date.now());
    const days = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)));

    return (
      <div className="flex flex-col gap-4 items-center justify-center bg-[#F9F1E3] w-full py-8">
        <p className="text-xl font-bold text-[#315900]">faltam {days.value} dias</p>
      </div>
    );
}
  