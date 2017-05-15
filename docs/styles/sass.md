1. `yarn add sass-loader node-sass --dev`
2. In `rules-styles.js`:

```diff
export default [
...,
+{
+  test: /\.scss$/,
+  loader: ExtractTextPlugin.extract({
+    fallback: "style-loader",
+    use: [
+      {
+        loader: 'css-loader',
+        query: {
+          modules: false,
+          sourceMap: false,
+          localIdentName: '[hash:base64:5]',
+        },
+      },
+      {
+        loader: 'postcss-loader'
+      },
+      {
+        loader: 'sass-loader',
+        query: {
+          sourceMap: false,
+        }
+      }
+    ]
+  }),
+}
```