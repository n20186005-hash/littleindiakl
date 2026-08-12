# Little India Brickfields：资料核验摘要

## 景点识别

用户提供的门牌地址落在 `KARISHMA TEXTILES SDN.BHD`（229, Jalan Tun Sambanthan）附近；Google 地图地点卡片将该区域标示为 **Little India Brickfields**，类别为游客景点。网站将以开放式街区景点 Little India Brickfields 为主体，而非把服装店误作景点。

## 可用于页面的事实

| 主题 | 已核实的信息 | 使用方式 |
| --- | --- | --- |
| 位置 | Brickfields，50470 Kuala Lumpur；用户地图 embed 提供坐标约为 3.1292845, 101.6815846 | 地图、JSON-LD、交通说明 |
| 评分 | Google 地图地点卡片显示评分 4.3 / 5，共 14,193 条评价 | JSON-LD 的 `aggregateRating`，页面注明来源为 Google 地图且可能变化 |
| 开放 | Google 地图地点卡片显示当时“营业中，21:30 关闭”；该景点为开放式街区 | 页面说明以街区自由漫步为主，店铺和宗教场所时间各异；JSON-LD 使用 09:00–21:30 作为参考并提示出行前确认 |
| 文化背景 | 马来西亚旅游部曾提及 Little India Brickfields 的免费文化步行导览，显示其为官方识别的文化游览区域 | 叙事与“步行探索”定位 |
| 轨道交通 | Rapid KL 说明 KL Monorail 连接 KL Sentral 与市区；路线停靠 Tun Sambanthan；KL Sentral 末班参考为 23:30 | 交通板块与换乘建议 |

## 来源

1. Google Maps：Little India Brickfields 地点卡片与用户提供的地图链接，访问于 2026-08-12。
2. Tourism Malaysia, *A (FREE) WALK DOWN KUALA LUMPUR's MEMORY LANE*：https://www.tourism.gov.my/media/view/a-free-walk-down-kuala-lumpur-s-memory-lane
3. Rapid KL, *Monorail*：https://myrapid.com.my/bus-train/rapid-kl/monorail/
4. Rapid KL, *Journey Planner*：https://myrapid.com.my/journey-planner/

## 真实照片与许可

网站使用两张 Wikimedia Commons 真实照片，以便独立 Cloudflare 部署也能正常取得图片。第一张 Little India 街景的作者为 Yun Huang Yong，采用 CC BY 2.0；第二张 Sri Krishna Temple 照片的作者为 Shesmax，采用 CC BY-SA 4.0。对应署名和许可已保留于页面图注与本说明中。

## 预览核验

2026-08-12 的临时预览显示：导航、首屏真实街景、章节、FAQ、网站图标与马来语内容均正确渲染。`/manus-storage/` 仅适用于项目受管预览，不能保证独立 Cloudflare Worker 部署可访问，因此最终源码改用许可明确的 Wikimedia 静态媒体地址。
