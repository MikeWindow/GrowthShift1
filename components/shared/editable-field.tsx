'use client';

import { useState, useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { Pencil, Check, X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ── Editable Text Row ──────────────────────────────────────────────────────

interface EditableRowProps {
  label: string;
  value: string;
  onSave: (value: string) => void;
}

export function EditableRow({ label, value, onSave }: EditableRowProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const commit = () => {
    onSave(draft.trim() || value);
    setEditing(false);
  };

  const cancel = () => {
    setDraft(value);
    setEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') commit();
    if (e.key === 'Escape') cancel();
  };

  return (
    <div className="flex items-start gap-3 py-3 group">
      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide w-36 shrink-0 pt-1">
        {label}
      </span>
      {editing ? (
        <div className="flex flex-1 items-center gap-1.5 min-w-0">
          <Input
            ref={inputRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
            className="h-7 text-sm flex-1 px-2.5"
          />
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6 shrink-0 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
            onClick={commit}
          >
            <Check className="h-3.5 w-3.5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6 shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
            onClick={cancel}
          >
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-between gap-2 min-w-0">
          <span className="text-sm text-foreground truncate flex-1">{value}</span>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground hover:bg-muted"
            onClick={() => {
              setDraft(value);
              setEditing(true);
            }}
          >
            <Pencil className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
}

// ── Editable Tags Row ──────────────────────────────────────────────────────

interface EditableTagsRowProps {
  label: string;
  values: string[];
  onSave: (values: string[]) => void;
}

export function EditableTagsRow({ label, values, onSave }: EditableTagsRowProps) {
  const [editing, setEditing] = useState(false);
  const [tags, setTags] = useState<string[]>(values);
  const [newTag, setNewTag] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) inputRef.current?.focus();
  }, [editing]);

  const addTag = () => {
    const t = newTag.trim();
    if (t && !tags.includes(t)) setTags((prev) => [...prev, t]);
    setNewTag('');
    inputRef.current?.focus();
  };

  const removeTag = (tag: string) => setTags((prev) => prev.filter((t) => t !== tag));

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
    if (e.key === 'Escape') {
      setTags(values);
      setNewTag('');
      setEditing(false);
    }
  };

  const commit = () => {
    onSave(tags);
    setEditing(false);
  };

  const cancel = () => {
    setTags(values);
    setNewTag('');
    setEditing(false);
  };

  return (
    <div className="flex items-start gap-3 py-3 group">
      <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide w-36 shrink-0 pt-0.5">
        {label}
      </span>
      {editing ? (
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap gap-1.5 items-center">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-foreground"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-muted-foreground hover:text-destructive transition-colors ml-0.5"
                >
                  <X className="h-2.5 w-2.5" />
                </button>
              </span>
            ))}
            <div className="flex items-center gap-1">
              <Input
                ref={inputRef}
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Add..."
                className="h-6 text-xs w-24 px-2"
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="h-6 w-6 text-muted-foreground hover:text-primary"
                onClick={addTag}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="h-6 text-[10px] px-2.5 text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700"
              onClick={commit}
            >
              <Check className="h-2.5 w-2.5 mr-1" />
              Save
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="h-6 text-[10px] px-2.5 text-muted-foreground"
              onClick={cancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 items-start justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 flex-1">
            {values.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className={cn('text-[11px] font-normal h-5 px-2 border border-border/50')}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:text-foreground hover:bg-muted mt-0.5"
            onClick={() => {
              setTags(values);
              setEditing(true);
            }}
          >
            <Pencil className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
}
