import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Button } from '../atoms/Button';

interface TabsProps {
  tabs: { id: string; name: string; children: React.ReactNode }[];
}

export const Tabs = observer(({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex flex-row">
        {tabs.map((tab, index) => (
          <Button
            variant="outline"
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className="mx-3"
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <div>{tabs[activeTab].children}</div>
    </div>
  );
});
