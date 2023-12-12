module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 0,
    'react/display-name': 0,

    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@mui/*/*/*"]
      }
    ], // không dùng import 3 cấp
    'no-console': 1, // cảnh báo khi viết console trong code
    'no-lonely-if': 1, // cảnh báo nếu dùng if trong else, hãy dùng else if
    'no-unused-vars': 1, // khai báo biến nhưng 0 sử dụng
    'no-trailing-spaces': 1, // thừa dấu cách phía sau dòng code
    'no-multi-spaces': 1, // dư thùa khoảng trống giữa các chữ, chỉ cách nhau 1 khoảng trống
    'no-multiple-empty-lines': 1, // dư thùa quá nhiều dòng trống giũa các dòng code với nhau, chỉ được 1 dòng
    'space-before-blocks': ['error', 'always'], // phải có 1 khoảng trống trước 1 khối code, như là if else
    'object-curly-spacing': [1, 'always'], // phải có 1 khoảng trống trước hoặc sau dấu ngoặc nhọn của object
    'indent': ['warn', 2], // tab size = 2
    'semi': [1, 'never'], // dấu chấm phẩy cuối dòng
    'quotes': ['error', 'single'], // string phải dấu nháy đơn
    'array-bracket-spacing': 1, // cảnh báo nếu có khoảng trống khi khai báo mảng
    'linebreak-style': 0, // không dùng \n \n\r
    'no-unexpected-multiline': 'warn', // hiện cách báo nếu có các lỗi không dữ đoán trước được
    'keyword-spacing': 1, // khoảng trống trước từ khoá
    'comma-dangle': 1, // dư thừa dấu phẩy
    'comma-spacing': 1, // khoảng trống sau dấy phẩy
    'arrow-spacing': 1 // khoảng trống trước và sau dấu => arrow function
  },
}
