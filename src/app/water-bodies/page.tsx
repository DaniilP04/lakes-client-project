import { ProtectedShell } from '@/components/ProtectedShell';
import { PageHeader } from '@/components/PageHeader';
import { WaterBodiesExplorer } from '@/components/WaterBodiesExplorer';

export default function WaterBodiesPage() {
  return (
    <ProtectedShell>
      <div className="stack">
        <PageHeader
          title="Карта озёр"
          description="Просматривайте водоёмы на интерактивной карте, выбирайте объект и переходите к его подробной аналитике."
        />
        <WaterBodiesExplorer />
      </div>
    </ProtectedShell>
  );
}