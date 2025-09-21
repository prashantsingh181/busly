interface KeyValuePairProps {
  keyString: string;
  value: string;
}
function KeyValuePair({ keyString, value }: Readonly<KeyValuePairProps>) {
  return (
    <div className="space-x-2">
      <span className="font-medium text-neutral-800/75">{keyString}:</span>
      <span className="text-textSecondary font-semibold">{value}</span>
    </div>
  );
}

export default KeyValuePair;
