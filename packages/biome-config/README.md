# `@workspace/biome-config`

Shared BiomeJS configuration for the workspace.

## Usage

In your package, create a `biome.json` file with the following content:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "extends": ["@workspace/biome-config/base"]
}
```

For Next.js projects:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "extends": ["@workspace/biome-config/next-js"]
}
```

For React internal projects:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.8.3/schema.json",
  "extends": ["@workspace/biome-config/react-internal"]
}
``` 