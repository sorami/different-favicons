import { ImageResponse } from 'next/server'
 
export const runtime = 'edge'

// 画像のメタデータ
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// ImageResponseによる画像の生成
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        { process.env.NODE_ENV === 'development' ? '🚧' : '🥳' }
      </div>
    ),
    {
      // emoji種類の選択
      // "openmoji" | "twemoji" | "blobmoji" | "noto" | "fluent" | "fluentFlat"
      emoji: "twemoji",
      ...size,
    }
  )
}