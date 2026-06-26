type Props = {
  label: string;
  value: string | number | null;
};

function DetailRow({ label, value }: Props) {
  return (
    <div className="flex items-start justify-between gap-4 py-1">
      <span className="text-sm text-(--flora-text-muted)">{label}</span>

      <span className="text-right text-sm font-medium text-(--flora-text)">
        {value ?? "Unknown"}
      </span>
    </div>
  );
}

export default DetailRow;
