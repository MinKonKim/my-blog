import { enableMapSet } from "immer";
enableMapSet(); // ✅ 이걸 제일 위에 넣어주세요
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type postTagType = {
  items: Set<string>;
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
  getItems: () => string[];
};
type PersistedState = {
  items: string[];
};

export const usePostTagStore = create<postTagType>()(
  persist(
    immer((set, get) => ({
      items: new Set<string>(),

      addItem: (item) => {
        set((state) => {
          state.items.add(item); // immer 덕분에 직접 조작 가능
        });
      },

      removeItem: (item) => {
        set((state) => {
          state.items.delete(item);
        });
      },

      getItems: () => Array.from(get().items),
    })),
    {
      name: "tag-storage",
      // 저장 시 Set → Array
      partialize: (state): PersistedState => ({
        items: Array.from(state.items),
      }),
      // 복구 시 Array → Set
      merge: (persistedState, currentState): postTagType => {
        const restored = persistedState as PersistedState;
        return {
          ...currentState,
          items: new Set(restored.items),
        };
      },
    }
  )
);

// shallow 사용 예시
// 컴포넌트에서 다음과 같이 사용할 수 있습니다:
// const items = usePostTagStore(state => state.items, shallow);
