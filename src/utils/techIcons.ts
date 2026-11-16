import { withBase } from "../config";

export interface TechIconDef {
  id: string;
  label: string;
  src: string;
  invertOnDark?: boolean;
  badgeOnLight?: boolean;
}

export const TECH_ICONS = {
  python: {
    id: "python",
    label: "Python",
    src: withBase("icons/python.svg"),
  },
  postgresql: {
    id: "postgresql",
    label: "PostgreSQL",
    src: withBase("icons/postgresql.svg"),
  },
  pyspark: {
    id: "pyspark",
    label: "PySpark",
    src: withBase("icons/apachespark.svg"),
  },
  airflow: {
    id: "airflow",
    label: "Apache Airflow",
    src: withBase("icons/apacheairflow.svg"),
  },
  docker: {
    id: "docker",
    label: "Docker",
    src: withBase("icons/docker.svg"),
  },
  fastapi: {
    id: "fastapi",
    label: "FastAPI",
    src: withBase("icons/fastapi.svg"),
  },
  sqlite: {
    id: "sqlite",
    label: "SQLite",
    src: withBase("icons/sqlite.svg"),
  },
  mongodb: {
    id: "mongodb",
    label: "MongoDB",
    src: withBase("icons/mongodb.svg"),
  },
  linux: {
    id: "linux",
    label: "Linux",
    src: withBase("icons/linux.svg"),
  },
  kafka: {
    id: "kafka",
    label: "Apache Kafka",
    src: withBase("icons/apachekafka.svg"),
    invertOnDark: true,
  },
  databricks: {
    id: "databricks",
    label: "Databricks",
    src: withBase("icons/databricks.svg"),
  },
  snowflake: {
    id: "snowflake",
    label: "Snowflake",
    src: withBase("icons/snowflake.svg"),
  },
  duckdb: {
    id: "duckdb",
    label: "DuckDB",
    src: withBase("icons/duckdb.svg"),
    badgeOnLight: true,
  },
} as const satisfies Record<string, TechIconDef>;

export type TechIconKey = keyof typeof TECH_ICONS;

const MATCH_RULES: Array<[RegExp, TechIconKey]> = [
  [/fastapi/i, "fastapi"],
  [/airflow/i, "airflow"],
  [/kafka/i, "kafka"],
  [/databricks/i, "databricks"],
  [/pyspark|spark/i, "pyspark"],
  [/snowflake/i, "snowflake"],
  [/postgresql|postgres/i, "postgresql"],
  [/mongodb/i, "mongodb"],
  [/duckdb/i, "duckdb"],
  [/sqlite/i, "sqlite"],
  [/docker/i, "docker"],
  [/python/i, "python"],
  [/linux/i, "linux"],
];

export function getTechIconByKey(key: TechIconKey): TechIconDef {
  return TECH_ICONS[key];
}

export function getTechIcons(label: string): TechIconDef[] {
  const matched: TechIconDef[] = [];
  const seen = new Set<TechIconKey>();

  for (const [pattern, key] of MATCH_RULES) {
    if (pattern.test(label) && !seen.has(key)) {
      seen.add(key);
      matched.push(TECH_ICONS[key]);
      if (matched.length === 2) break;
    }
  }

  return matched;
}
