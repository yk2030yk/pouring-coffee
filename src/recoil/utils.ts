import {
  atom,
  atomFamily,
  selector,
  selectorFamily,
  AtomOptions,
  AtomFamilyOptions,
  ReadWriteSelectorOptions,
  ReadOnlySelectorOptions,
  ReadOnlySelectorFamilyOptions,
  ReadWriteSelectorFamilyOptions,
  SerializableParam,
} from 'recoil'

export const createSelectorWithKey = (baseKey: string) => <T>(
  options: ReadWriteSelectorOptions<T> | ReadOnlySelectorOptions<T>
) =>
  selector<T>({
    ...options,
    key: `${baseKey}-selector-${options.key}`,
  })

export const createSelectorFamilyWithKey = (baseKey: string) => <
  T,
  P extends SerializableParam
>(
  options:
    | ReadOnlySelectorFamilyOptions<T, P>
    | ReadWriteSelectorFamilyOptions<T, P>
) =>
  selectorFamily<T, P>({
    ...options,
    key: `${baseKey}-selectorFamily-${options.key}`,
  })

export const createAtomWithKey = (baseKey: string) => <T>(
  options: AtomOptions<T>
) =>
  atom<T>({
    ...options,
    key: `${baseKey}-atom-${options.key}`,
  })

export const createAtomFamilyWithKey = (baseKey: string) => <
  T,
  P extends SerializableParam
>(
  options: AtomFamilyOptions<T, P>
) =>
  atomFamily<T, P>({
    ...options,
    key: `${baseKey}-atomFamily-${options.key}`,
  })
