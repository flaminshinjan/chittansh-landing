import type { ShipLogEntry } from '../../sanity/types';

const BADGE_LABEL: Record<string, string> = {
  live: 'LIVE',
  sandbox: 'SANDBOX',
  private: 'PRIVATE',
  nda: 'NDA',
};

function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
}

export default function ShipLog({ entries }: { entries: ShipLogEntry[] }) {
  return (
    <div className="ship-log">
      <div className="ship-log__head">
        <span>date</span>
        <span>status</span>
        <span>domain</span>
        <span>.case</span>
        <span>brief</span>
        <span></span>
      </div>

      {entries.map(entry => {
        const status = entry.status ?? 'live';
        const label = BADGE_LABEL[status] ?? 'LIVE';
        const href = entry.href || '#';
        const isLink = href !== '#';
        const Cmp: any = isLink ? 'a' : 'div';
        return (
          <Cmp
            key={entry._id}
            {...(isLink ? { href } : {})}
            className={`ship-log__row${isLink ? '' : ' ship-log__row--more'}`}
          >
            <span className="ship-log__date">{formatDate(entry.shippedDate)}</span>
            <span className={`ship-log__badge ${status}`}>[ {label} ]</span>
            <span className="ship-log__domain">{entry.domain}</span>
            <span className="ship-log__name">{entry.name}</span>
            <span className="ship-log__brief">{entry.brief}</span>
            <span className="ship-log__arr">{isLink ? '→' : '·'}</span>
          </Cmp>
        );
      })}
    </div>
  );
}
