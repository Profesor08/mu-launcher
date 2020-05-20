import Registry from "winreg";

const parseValue = (value: string, type: TValueType): string | number => {
  switch (type) {
    case "REG_DWORD":
      return Number(value);
    case "REG_QWORD":
      return Number(value);
  }

  return value;
};

export const getRegistryValue = async <T>(parameter: IRegistryKey, defaultValue: T): Promise<T> =>
  new Promise((resolve) => {
    try {
      const key = new Registry({
        hive: parameter.hive,
        key: parameter.key,
      });

      key.get(parameter.value, (err, result) => {
        if (err || result === null) {
          resolve(defaultValue);
        } else {
          resolve((parseValue(result.value, result.type as TValueType) as unknown) as T);
        }
      });
    } catch {
      resolve(defaultValue);
    }
  });

export const setRegistryValue = (parameter: IRegistryKey, value: string | number): Promise<boolean> =>
  new Promise((resolve) => {
    try {
      const key = new Registry({
        hive: parameter.hive,
        key: parameter.key,
      });

      const callback = (err: Error) => {
        if (err) {
          resolve(false);
        } else {
          resolve(true);
        }
      };

      if (typeof value === "string") {
        key.set(parameter.value, Registry.REG_SZ, value, callback);
      } else {
        key.set(parameter.value, Registry.REG_DWORD, value.toString(), callback);
      }
    } catch {
      resolve(false);
    }
  });
