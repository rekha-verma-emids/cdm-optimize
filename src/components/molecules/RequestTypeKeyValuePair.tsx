import { KeyValuePair } from "../atoms/KeyValuePair";

interface RequestTypeKeyValuePairProps {
  label: string;
  fileName: string | null;
  isActive: boolean;
}

export function RequestTypeKeyValuePair({ 
  label, 
  fileName, 
  isActive 
}: RequestTypeKeyValuePairProps) {
  const icon = isActive 
    ? <span style={{ color: 'var(--mui-palette-success-main)' }}>Test</span> 
    : <span style={{ color: 'var(--mui-palette-gray-700)' }}>Test</span>;
  const displayValue = fileName || '--';

  return (
    <KeyValuePair 
      label={label} 
      value={displayValue} 
      keyIcon={icon}
    />
  );
}