window.__ModuleLoader__.load({
	id: "@purezhi/dsh-plugin-pando",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		//#region sprite list (embedded snapshot of trending sprites.confirmo.love)
		var SPRITE_LIST = [{"id":"a7604d57-cb3d-488b-8ac0-c10ee7a1940e","name":"乌萨奇！！","spriteUrl":"https://pub-sprites.confirmo.love/sprites/a7604d57-cb3d-488b-8ac0-c10ee7a1940e/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a7604d57-cb3d-488b-8ac0-c10ee7a1940e/thumbnail.png?v=1777370829","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a7604d57-cb3d-488b-8ac0-c10ee7a1940e/processed_thumbnail.png","frameWidth":512,"frameHeight":512,"frameCount":56},{"id":"6165bbf0-efc1-4b87-9dde-2ea9eb84b336","name":"芙莉莲/Frieren","spriteUrl":"https://pub-sprites.confirmo.love/sprites/6165bbf0-efc1-4b87-9dde-2ea9eb84b336/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/6165bbf0-efc1-4b87-9dde-2ea9eb84b336/thumbnail.png?v=1779173434","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/6165bbf0-efc1-4b87-9dde-2ea9eb84b336/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"37e6eb76-025c-482b-b2eb-cd7ed5e0ba62","name":"圆头耄耋","spriteUrl":"https://pub-sprites.confirmo.love/sprites/37e6eb76-025c-482b-b2eb-cd7ed5e0ba62/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/37e6eb76-025c-482b-b2eb-cd7ed5e0ba62/thumbnail.png?v=1776258222","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/37e6eb76-025c-482b-b2eb-cd7ed5e0ba62/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"9e0425ed-dd16-4924-af63-9e5c6fc86728","name":"户晨风","spriteUrl":"https://pub-sprites.confirmo.love/sprites/9e0425ed-dd16-4924-af63-9e5c6fc86728/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/9e0425ed-dd16-4924-af63-9e5c6fc86728/thumbnail.png?v=1774421312","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/9e0425ed-dd16-4924-af63-9e5c6fc86728/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"67544575-f0d7-4ae6-8416-d62116eb9f7e","name":"doro","spriteUrl":"https://pub-sprites.confirmo.love/sprites/67544575-f0d7-4ae6-8416-d62116eb9f7e/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/67544575-f0d7-4ae6-8416-d62116eb9f7e/thumbnail.png?v=1769594946","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/67544575-f0d7-4ae6-8416-d62116eb9f7e/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"dd3fd948-a213-46bc-8e25-51e7712762c6","name":"无职转生-洛琪希","spriteUrl":"https://pub-sprites.confirmo.love/sprites/dd3fd948-a213-46bc-8e25-51e7712762c6/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/dd3fd948-a213-46bc-8e25-51e7712762c6/thumbnail.png?v=1769594972","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/dd3fd948-a213-46bc-8e25-51e7712762c6/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"7f0c997e-d198-4e9e-a486-6cd8c5339402","name":"Pyramid Head","spriteUrl":"https://pub-sprites.confirmo.love/sprites/7f0c997e-d198-4e9e-a486-6cd8c5339402/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/7f0c997e-d198-4e9e-a486-6cd8c5339402/thumbnail.jpg?v=1769578742","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/7f0c997e-d198-4e9e-a486-6cd8c5339402/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"a42e744f-8803-41a0-8292-26858c15c1c2","name":"东北雨","spriteUrl":"https://pub-sprites.confirmo.love/sprites/a42e744f-8803-41a0-8292-26858c15c1c2/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a42e744f-8803-41a0-8292-26858c15c1c2/thumbnail.png?v=1769594979","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a42e744f-8803-41a0-8292-26858c15c1c2/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"2888ef42-40e8-40ba-a0a3-6b898d424468","name":"小白","spriteUrl":"https://pub-sprites.confirmo.love/sprites/2888ef42-40e8-40ba-a0a3-6b898d424468/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2888ef42-40e8-40ba-a0a3-6b898d424468/thumbnail.png?v=1770189557","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2888ef42-40e8-40ba-a0a3-6b898d424468/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"2ea6924e-34f3-470f-960f-a0998bcd065b","name":"小八","spriteUrl":"https://pub-sprites.confirmo.love/sprites/2ea6924e-34f3-470f-960f-a0998bcd065b/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2ea6924e-34f3-470f-960f-a0998bcd065b/thumbnail.png?v=1777370893","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2ea6924e-34f3-470f-960f-a0998bcd065b/processed_thumbnail.png","frameWidth":512,"frameHeight":512,"frameCount":56},{"id":"01916a3b-d0bb-4bc9-ae30-3d14c5c6c88f","name":"派蒙","spriteUrl":"https://pub-sprites.confirmo.love/sprites/01916a3b-d0bb-4bc9-ae30-3d14c5c6c88f/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/01916a3b-d0bb-4bc9-ae30-3d14c5c6c88f/thumbnail.jpg?v=1769581304","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/01916a3b-d0bb-4bc9-ae30-3d14c5c6c88f/processed_thumbnail.png","frameWidth":128,"frameHeight":128,"frameCount":56},{"id":"922d98f6-9327-450d-a3c2-c2e708edf138","name":"初音未来","spriteUrl":"https://pub-sprites.confirmo.love/sprites/922d98f6-9327-450d-a3c2-c2e708edf138/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/922d98f6-9327-450d-a3c2-c2e708edf138/thumbnail.jpg?v=1778309881","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/922d98f6-9327-450d-a3c2-c2e708edf138/processed_thumbnail.png","frameWidth":552,"frameHeight":548,"frameCount":56},{"id":"1552dde6-2b2f-47e3-a6e9-e938ffe7385d","name":"瑞克","spriteUrl":"https://pub-sprites.confirmo.love/sprites/1552dde6-2b2f-47e3-a6e9-e938ffe7385d/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/1552dde6-2b2f-47e3-a6e9-e938ffe7385d/thumbnail.png?v=1770715205","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/1552dde6-2b2f-47e3-a6e9-e938ffe7385d/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"311bfc06-f441-4e4e-b54e-7eac1beec455","name":"吉伊","spriteUrl":"https://pub-sprites.confirmo.love/sprites/311bfc06-f441-4e4e-b54e-7eac1beec455/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/311bfc06-f441-4e4e-b54e-7eac1beec455/thumbnail.png?v=1777370880","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/311bfc06-f441-4e4e-b54e-7eac1beec455/processed_thumbnail.png","frameWidth":512,"frameHeight":512,"frameCount":56},{"id":"46f079cd-d4b1-4c1b-a809-a44de513ae76","name":"白雪","spriteUrl":"https://pub-sprites.confirmo.love/sprites/46f079cd-d4b1-4c1b-a809-a44de513ae76/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/46f079cd-d4b1-4c1b-a809-a44de513ae76/thumbnail.png?v=1769578050","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/46f079cd-d4b1-4c1b-a809-a44de513ae76/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"21ee0c97-b949-47b8-b6e4-a3d61abcb2ae","name":"rick","spriteUrl":"https://pub-sprites.confirmo.love/sprites/21ee0c97-b949-47b8-b6e4-a3d61abcb2ae/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/21ee0c97-b949-47b8-b6e4-a3d61abcb2ae/thumbnail.png?v=1774421506","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/21ee0c97-b949-47b8-b6e4-a3d61abcb2ae/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"2be42753-e553-43f0-b71d-8573b80d54cd","name":"Labubu","spriteUrl":"https://pub-sprites.confirmo.love/sprites/2be42753-e553-43f0-b71d-8573b80d54cd/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2be42753-e553-43f0-b71d-8573b80d54cd/thumbnail.jpg?v=1769578102","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2be42753-e553-43f0-b71d-8573b80d54cd/processed_thumbnail.png","frameWidth":552,"frameHeight":548,"frameCount":56},{"id":"e80ea475-c8fe-456e-8219-7f809d031ad7","name":"蜡笔小新","spriteUrl":"https://pub-sprites.confirmo.love/sprites/e80ea475-c8fe-456e-8219-7f809d031ad7/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/e80ea475-c8fe-456e-8219-7f809d031ad7/thumbnail.jpg?v=1769593786","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/e80ea475-c8fe-456e-8219-7f809d031ad7/processed_thumbnail.png","frameWidth":552,"frameHeight":548,"frameCount":56},{"id":"002580a3-e036-45d8-abaa-df8b93e746ba","name":"ikun","spriteUrl":"https://pub-sprites.confirmo.love/sprites/002580a3-e036-45d8-abaa-df8b93e746ba/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/002580a3-e036-45d8-abaa-df8b93e746ba/thumbnail.png?v=1769578037","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/002580a3-e036-45d8-abaa-df8b93e746ba/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"a1463a70-8b54-43fa-828a-f7f3a523aa12","name":"Doraemon","spriteUrl":"https://pub-sprites.confirmo.love/sprites/a1463a70-8b54-43fa-828a-f7f3a523aa12/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a1463a70-8b54-43fa-828a-f7f3a523aa12/thumbnail.png?v=1769578510","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a1463a70-8b54-43fa-828a-f7f3a523aa12/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"14f9a851-3189-457c-b5b3-832aa72180c0","name":"Demogorgon","spriteUrl":"https://pub-sprites.confirmo.love/sprites/14f9a851-3189-457c-b5b3-832aa72180c0/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/14f9a851-3189-457c-b5b3-832aa72180c0/thumbnail.png?v=1769638574","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/14f9a851-3189-457c-b5b3-832aa72180c0/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"e2767028-adc9-4354-b6c6-5abdde0595d8","name":"Hachiware/小八","spriteUrl":"https://pub-sprites.confirmo.love/sprites/e2767028-adc9-4354-b6c6-5abdde0595d8/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/e2767028-adc9-4354-b6c6-5abdde0595d8/thumbnail.png?v=1769649805","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/e2767028-adc9-4354-b6c6-5abdde0595d8/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"d38e104f-2bac-4552-b27e-3d107a6c16fe","name":"小八猫","spriteUrl":"https://pub-sprites.confirmo.love/sprites/d38e104f-2bac-4552-b27e-3d107a6c16fe/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d38e104f-2bac-4552-b27e-3d107a6c16fe/thumbnail.png?v=1769628912","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d38e104f-2bac-4552-b27e-3d107a6c16fe/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"415f03dc-8039-4e73-8189-3bc9189b1bed","name":"GitHub","spriteUrl":"https://pub-sprites.confirmo.love/sprites/415f03dc-8039-4e73-8189-3bc9189b1bed/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/415f03dc-8039-4e73-8189-3bc9189b1bed/thumbnail.png?v=1769578537","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/415f03dc-8039-4e73-8189-3bc9189b1bed/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"0be9d2b4-009b-4707-9f68-494679a8441a","name":"憨憨杰尼龟","spriteUrl":"https://pub-sprites.confirmo.love/sprites/0be9d2b4-009b-4707-9f68-494679a8441a/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/0be9d2b4-009b-4707-9f68-494679a8441a/thumbnail.png?v=1769578635","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/0be9d2b4-009b-4707-9f68-494679a8441a/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"39718dad-6cd1-4970-8949-515e66a1dd8a","name":"Duo","spriteUrl":"https://pub-sprites.confirmo.love/sprites/39718dad-6cd1-4970-8949-515e66a1dd8a/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/39718dad-6cd1-4970-8949-515e66a1dd8a/thumbnail.jpg?v=1769578696","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/39718dad-6cd1-4970-8949-515e66a1dd8a/processed_thumbnail.png","frameWidth":512,"frameHeight":512,"frameCount":56},{"id":"2c1f1497-2421-4543-912d-0b4960881c85","name":"海绵宝宝","spriteUrl":"https://pub-sprites.confirmo.love/sprites/2c1f1497-2421-4543-912d-0b4960881c85/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2c1f1497-2421-4543-912d-0b4960881c85/thumbnail.jpg?v=1770263621","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2c1f1497-2421-4543-912d-0b4960881c85/processed_thumbnail.png","frameWidth":512,"frameHeight":512,"frameCount":56},{"id":"105042d5-47ca-408b-b19b-f36015f41106","name":"海绵宝宝","spriteUrl":"https://pub-sprites.confirmo.love/sprites/105042d5-47ca-408b-b19b-f36015f41106/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/105042d5-47ca-408b-b19b-f36015f41106/thumbnail.png?v=1769578807","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/105042d5-47ca-408b-b19b-f36015f41106/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"7b2adf91-87cb-4b0c-b435-9148bcadd786","name":"皮卡丘2代","spriteUrl":"https://pub-sprites.confirmo.love/sprites/7b2adf91-87cb-4b0c-b435-9148bcadd786/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/7b2adf91-87cb-4b0c-b435-9148bcadd786/thumbnail.png?v=1769578623","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/7b2adf91-87cb-4b0c-b435-9148bcadd786/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"277f7e40-419b-4f96-a503-0261977d0c45","name":"mupeilin","spriteUrl":"https://pub-sprites.confirmo.love/sprites/277f7e40-419b-4f96-a503-0261977d0c45/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/277f7e40-419b-4f96-a503-0261977d0c45/thumbnail.png?v=1769566984","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/277f7e40-419b-4f96-a503-0261977d0c45/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"d8a2be27-e414-479e-b9c2-0853b22a33c5","name":"派大星","spriteUrl":"https://pub-sprites.confirmo.love/sprites/d8a2be27-e414-479e-b9c2-0853b22a33c5/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d8a2be27-e414-479e-b9c2-0853b22a33c5/thumbnail.png?v=1769578708","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d8a2be27-e414-479e-b9c2-0853b22a33c5/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"fb350c1a-579c-41bb-80de-9478fe7807d3","name":"克林","spriteUrl":"https://pub-sprites.confirmo.love/sprites/fb350c1a-579c-41bb-80de-9478fe7807d3/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/fb350c1a-579c-41bb-80de-9478fe7807d3/thumbnail.jpg?v=1769578719","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/fb350c1a-579c-41bb-80de-9478fe7807d3/processed_thumbnail.png","frameWidth":128,"frameHeight":128,"frameCount":56},{"id":"44ff00fb-b7d3-4f63-8680-08f18351e96d","name":"韩立","spriteUrl":"https://pub-sprites.confirmo.love/sprites/44ff00fb-b7d3-4f63-8680-08f18351e96d/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/44ff00fb-b7d3-4f63-8680-08f18351e96d/thumbnail.png?v=1769488004","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/44ff00fb-b7d3-4f63-8680-08f18351e96d/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"d5bd00be-ade3-4ae0-ae7e-e842cf493a74","name":"GoolyGooly","spriteUrl":"https://pub-sprites.confirmo.love/sprites/d5bd00be-ade3-4ae0-ae7e-e842cf493a74/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d5bd00be-ade3-4ae0-ae7e-e842cf493a74/thumbnail.png?v=1769590106","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d5bd00be-ade3-4ae0-ae7e-e842cf493a74/processed_thumbnail.png","frameWidth":138,"frameHeight":137,"frameCount":56},{"id":"b09a067f-9ee3-4fc7-8106-20bfa9d9bdff","name":"Claude","spriteUrl":"https://pub-sprites.confirmo.love/sprites/b09a067f-9ee3-4fc7-8106-20bfa9d9bdff/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/b09a067f-9ee3-4fc7-8106-20bfa9d9bdff/thumbnail.png?v=1769511927","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/b09a067f-9ee3-4fc7-8106-20bfa9d9bdff/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"68a8ce5a-8eff-4949-9602-ffa206d911d2","name":"Mario","spriteUrl":"https://pub-sprites.confirmo.love/sprites/68a8ce5a-8eff-4949-9602-ffa206d911d2/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/68a8ce5a-8eff-4949-9602-ffa206d911d2/thumbnail.png?v=1769578596","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/68a8ce5a-8eff-4949-9602-ffa206d911d2/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"862571de-e4a8-4118-bb78-a1a4cecc50c0","name":"hedgehog","spriteUrl":"https://pub-sprites.confirmo.love/sprites/862571de-e4a8-4118-bb78-a1a4cecc50c0/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/862571de-e4a8-4118-bb78-a1a4cecc50c0/thumbnail.png?v=1769578122","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/862571de-e4a8-4118-bb78-a1a4cecc50c0/processed_thumbnail.png","frameWidth":128,"frameHeight":128,"frameCount":56},{"id":"a3273999-dd53-4ce1-8ec9-116b1efe677a","name":"Ferris the Crab","spriteUrl":"https://pub-sprites.confirmo.love/sprites/a3273999-dd53-4ce1-8ec9-116b1efe677a/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a3273999-dd53-4ce1-8ec9-116b1efe677a/thumbnail.png?v=1769549098","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a3273999-dd53-4ce1-8ec9-116b1efe677a/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"90a041cf-77e1-4cb4-a2c7-cd9c2d7ef82d","name":"电锯人-波奇塔","spriteUrl":"https://pub-sprites.confirmo.love/sprites/90a041cf-77e1-4cb4-a2c7-cd9c2d7ef82d/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/90a041cf-77e1-4cb4-a2c7-cd9c2d7ef82d/thumbnail.png?v=1769519027","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/90a041cf-77e1-4cb4-a2c7-cd9c2d7ef82d/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"1cc6f82a-1a70-412f-95a7-a962e2000780","name":"宝可梦-可达鸭","spriteUrl":"https://pub-sprites.confirmo.love/sprites/1cc6f82a-1a70-412f-95a7-a962e2000780/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/1cc6f82a-1a70-412f-95a7-a962e2000780/thumbnail.png?v=1769606244","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/1cc6f82a-1a70-412f-95a7-a962e2000780/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"2eb75b70-076c-43e3-a52e-6ba90d3c72f5","name":"我嘞个豆","spriteUrl":"https://pub-sprites.confirmo.love/sprites/2eb75b70-076c-43e3-a52e-6ba90d3c72f5/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2eb75b70-076c-43e3-a52e-6ba90d3c72f5/thumbnail.png?v=1769628863","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/2eb75b70-076c-43e3-a52e-6ba90d3c72f5/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"71e3bb56-926d-4215-97ac-8f704dfc85dc","name":"海双布偶猫","spriteUrl":"https://pub-sprites.confirmo.love/sprites/71e3bb56-926d-4215-97ac-8f704dfc85dc/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/71e3bb56-926d-4215-97ac-8f704dfc85dc/thumbnail.png?v=1769578932","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/71e3bb56-926d-4215-97ac-8f704dfc85dc/processed_thumbnail.png","frameWidth":138,"frameHeight":137,"frameCount":56},{"id":"dbf2561c-e81a-4e65-945d-9c9982185e9d","name":"Doge（神烦狗）","spriteUrl":"https://pub-sprites.confirmo.love/sprites/dbf2561c-e81a-4e65-945d-9c9982185e9d/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/dbf2561c-e81a-4e65-945d-9c9982185e9d/thumbnail.png?v=1769638630","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/dbf2561c-e81a-4e65-945d-9c9982185e9d/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"ad86d2d7-a78e-4013-9416-96976fd1ecda","name":"爱莉希雅/Elyesia","spriteUrl":"https://pub-sprites.confirmo.love/sprites/ad86d2d7-a78e-4013-9416-96976fd1ecda/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/ad86d2d7-a78e-4013-9416-96976fd1ecda/thumbnail.png?v=1769584333","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/ad86d2d7-a78e-4013-9416-96976fd1ecda/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"d43f4bfb-6750-4a4e-b2d0-a1ef7239e218","name":"Claude-1","spriteUrl":"https://pub-sprites.confirmo.love/sprites/d43f4bfb-6750-4a4e-b2d0-a1ef7239e218/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d43f4bfb-6750-4a4e-b2d0-a1ef7239e218/thumbnail.png?v=1769606373","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/d43f4bfb-6750-4a4e-b2d0-a1ef7239e218/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"c2213389-0d2d-492b-b37e-b79066bea6d9","name":"songyu","spriteUrl":"https://pub-sprites.confirmo.love/sprites/c2213389-0d2d-492b-b37e-b79066bea6d9/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/c2213389-0d2d-492b-b37e-b79066bea6d9/thumbnail.png?v=1769612929","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/c2213389-0d2d-492b-b37e-b79066bea6d9/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"8389be5f-fdb6-4667-87ba-d5e292edb7ae","name":"空洞骑士","spriteUrl":"https://pub-sprites.confirmo.love/sprites/8389be5f-fdb6-4667-87ba-d5e292edb7ae/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/8389be5f-fdb6-4667-87ba-d5e292edb7ae/thumbnail.jpg?v=1769665907","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/8389be5f-fdb6-4667-87ba-d5e292edb7ae/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"57c193a5-f708-4d70-8e04-2d99b2afa1a0","name":"Litte White","spriteUrl":"https://pub-sprites.confirmo.love/sprites/57c193a5-f708-4d70-8e04-2d99b2afa1a0/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/57c193a5-f708-4d70-8e04-2d99b2afa1a0/thumbnail.png?v=1769579019","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/57c193a5-f708-4d70-8e04-2d99b2afa1a0/processed_thumbnail.png","frameWidth":128,"frameHeight":128,"frameCount":56},{"id":"ce465e04-a284-4202-a1ef-866598e62c2e","name":"Q版本tifa","spriteUrl":"https://pub-sprites.confirmo.love/sprites/ce465e04-a284-4202-a1ef-866598e62c2e/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/ce465e04-a284-4202-a1ef-866598e62c2e/thumbnail.png?v=1769578559","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/ce465e04-a284-4202-a1ef-866598e62c2e/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"83947e9b-9f57-45e8-a54f-3e466c4a01d9","name":"Litte Pikachu","spriteUrl":"https://pub-sprites.confirmo.love/sprites/83947e9b-9f57-45e8-a54f-3e466c4a01d9/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/83947e9b-9f57-45e8-a54f-3e466c4a01d9/thumbnail.png?v=1769492469","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/83947e9b-9f57-45e8-a54f-3e466c4a01d9/processed_thumbnail.png","frameWidth":123,"frameHeight":121,"frameCount":56},{"id":"30fd26df-9ccb-4991-abf4-1b8a131b0f25","name":"fate-阿尔托莉亚","spriteUrl":"https://pub-sprites.confirmo.love/sprites/30fd26df-9ccb-4991-abf4-1b8a131b0f25/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/30fd26df-9ccb-4991-abf4-1b8a131b0f25/thumbnail.png?v=1769519017","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/30fd26df-9ccb-4991-abf4-1b8a131b0f25/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"13a0631a-3fbe-40d9-8557-43fe119e7fcf","name":"奶龙","spriteUrl":"https://pub-sprites.confirmo.love/sprites/13a0631a-3fbe-40d9-8557-43fe119e7fcf/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/13a0631a-3fbe-40d9-8557-43fe119e7fcf/thumbnail.png?v=1769665464","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/13a0631a-3fbe-40d9-8557-43fe119e7fcf/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"065de6cf-130c-4fef-9ddc-1196839e8eb5","name":"Izumi Konata","spriteUrl":"https://pub-sprites.confirmo.love/sprites/065de6cf-130c-4fef-9ddc-1196839e8eb5/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/065de6cf-130c-4fef-9ddc-1196839e8eb5/thumbnail.jpg?v=1770341646","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/065de6cf-130c-4fef-9ddc-1196839e8eb5/processed_thumbnail.png","frameWidth":552,"frameHeight":548,"frameCount":56},{"id":"f4af9e8b-ada1-407c-be4d-ce88769f6ee0","name":"EVA-明日香","spriteUrl":"https://pub-sprites.confirmo.love/sprites/f4af9e8b-ada1-407c-be4d-ce88769f6ee0/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/f4af9e8b-ada1-407c-be4d-ce88769f6ee0/thumbnail.png?v=1769672717","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/f4af9e8b-ada1-407c-be4d-ce88769f6ee0/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"a15cf9f6-d991-4253-a973-f0f305aacc31","name":"Peter","spriteUrl":"https://pub-sprites.confirmo.love/sprites/a15cf9f6-d991-4253-a973-f0f305aacc31/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a15cf9f6-d991-4253-a973-f0f305aacc31/thumbnail.png?v=1769512866","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a15cf9f6-d991-4253-a973-f0f305aacc31/processed_thumbnail.png","frameWidth":138,"frameHeight":137,"frameCount":56},{"id":"e3b09497-7a1f-49e9-8c0d-4c4b131f2283","name":"Kcat","spriteUrl":"https://pub-sprites.confirmo.love/sprites/e3b09497-7a1f-49e9-8c0d-4c4b131f2283/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/e3b09497-7a1f-49e9-8c0d-4c4b131f2283/thumbnail.png?v=1769494199","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/e3b09497-7a1f-49e9-8c0d-4c4b131f2283/processed_thumbnail.png","frameWidth":128,"frameHeight":128,"frameCount":56},{"id":"57a119fa-9bf0-421e-bdc4-703d4b3374f8","name":"哥伦比娅","spriteUrl":"https://pub-sprites.confirmo.love/sprites/57a119fa-9bf0-421e-bdc4-703d4b3374f8/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/57a119fa-9bf0-421e-bdc4-703d4b3374f8/thumbnail.png?v=1769685757","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/57a119fa-9bf0-421e-bdc4-703d4b3374f8/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56},{"id":"a31f06cf-b887-47e4-b04c-246a678dabac","name":"喜多川海夢2/Marin Kitagawa2","spriteUrl":"https://pub-sprites.confirmo.love/sprites/a31f06cf-b887-47e4-b04c-246a678dabac/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a31f06cf-b887-47e4-b04c-246a678dabac/thumbnail.jpg?v=1771979601","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/a31f06cf-b887-47e4-b04c-246a678dabac/processed_thumbnail.png","frameWidth":552,"frameHeight":548,"frameCount":56},{"id":"ca8806fb-68f8-4063-99cd-231b0ca2e174","name":"Clippy 3D","spriteUrl":"https://pub-sprites.confirmo.love/sprites/ca8806fb-68f8-4063-99cd-231b0ca2e174/sprite.jpg","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/ca8806fb-68f8-4063-99cd-231b0ca2e174/thumbnail.jpg?v=1773464284","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/ca8806fb-68f8-4063-99cd-231b0ca2e174/processed_thumbnail.png","frameWidth":552,"frameHeight":548,"frameCount":56},{"id":"7cf94efd-3787-4da1-bc74-44bf2b31f2ca","name":"宵宫/Yoimiya","spriteUrl":"https://pub-sprites.confirmo.love/sprites/7cf94efd-3787-4da1-bc74-44bf2b31f2ca/sprite.png","thumbnailUrl":"https://pub-sprites.confirmo.love/sprites/7cf94efd-3787-4da1-bc74-44bf2b31f2ca/thumbnail.png?v=1769706655","processedThumbnailUrl":"https://pub-sprites.confirmo.love/sprites/7cf94efd-3787-4da1-bc74-44bf2b31f2ca/processed_thumbnail.png","frameWidth":276,"frameHeight":274,"frameCount":56}];

		// Built-in sprite "QPanda": preprocessed (magenta keyed, frames
		// horizontally centered + feet aligned, per-row unified scale) and
		// bundled in assets/qpanda/, served by the node half at
		// /pando/local/qpanda/sheet.png — no runtime chroma-keying needed.
		// It is also the DEFAULT sprite shown on a fresh install (see the
		// initial render).
		//
		// MJ / MC are deliberately NOT built in any more: they live as ordinary
		// sprites in the plugin's configured `spriteDir` and are discovered at
		// runtime through GET /pando/local-sprites.
		var QPANDA_SPRITE = {
			id: "qpanda",
			name: "QPanda",
			spriteUrl: "/pando/local/qpanda/sheet.png?v=3",
			thumbnailUrl: "/pando/local/qpanda/thumb.png?v=3",
			processedThumbnailUrl: "/pando/local/qpanda/thumb.png?v=3",
			frameWidth: 256,
			frameHeight: 256,
			frameCount: 56,
			local: true,
			preprocessed: true,
			origin: "builtin"
		};
		//#endregion

		//#region pando cat markup — replica of the confirmo.love mascot
		var CAT_SVG =
			'<svg class="cf-cat" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
			'<defs>' +
			'<linearGradient id="cf-catGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
			'<stop offset="0%" stop-color="#FCD34D"/><stop offset="100%" stop-color="#F59E0B"/>' +
			'</linearGradient>' +
			'<linearGradient id="cf-cheekGrad" x1="0%" y1="0%" x2="0%" y2="100%">' +
			'<stop offset="0%" stop-color="#FCA5A5" stop-opacity="0.6"/><stop offset="100%" stop-color="#F87171" stop-opacity="0.4"/>' +
			'</linearGradient>' +
			'</defs>' +
			'<g class="cf-body">' +
			'<g class="cf-ear cf-ear-left"><polygon points="24,45 32,12 44,45" fill="url(#cf-catGrad)"/><polygon points="28,40 32,20 38,40" fill="#FBBF24"/></g>' +
			'<g class="cf-ear cf-ear-right"><polygon points="56,45 68,12 76,45" fill="url(#cf-catGrad)"/><polygon points="62,40 68,20 72,40" fill="#FBBF24"/></g>' +
			'<ellipse cx="50" cy="55" rx="35" ry="30" fill="url(#cf-catGrad)"/>' +
			'<g class="cf-eye cf-eye-left" style="transform-origin:38px 50px;"><ellipse cx="38" cy="50" rx="5" ry="6" fill="#1F2937"/><circle class="cf-highlight" cx="40" cy="48" r="1.5" fill="white"/></g>' +
			'<g class="cf-eye cf-eye-right" style="transform-origin:62px 50px;"><ellipse cx="62" cy="50" rx="5" ry="6" fill="#1F2937"/><circle class="cf-highlight" cx="64" cy="48" r="1.5" fill="white"/></g>' +
			'<ellipse cx="50" cy="60" rx="4" ry="3" fill="#F87171"/>' +
			'<path d="M 50 63 L 50 66" stroke="#1F2937" stroke-width="2" stroke-linecap="round"/>' +
			'<path d="M 42 68 Q 50 76 58 68" fill="none" stroke="#1F2937" stroke-width="2" stroke-linecap="round"/>' +
			'<g class="cf-whiskers" stroke="#1F2937" stroke-width="1.5" opacity="0.5">' +
			'<line x1="15" y1="55" x2="30" y2="58"/><line x1="15" y1="62" x2="30" y2="62"/>' +
			'<line x1="70" y1="58" x2="85" y2="55"/><line x1="70" y1="62" x2="85" y2="62"/>' +
			'</g>' +
			'<ellipse cx="30" cy="62" rx="6" ry="4" fill="url(#cf-cheekGrad)"/>' +
			'<ellipse cx="70" cy="62" rx="6" ry="4" fill="url(#cf-cheekGrad)"/>' +
			'<path class="cf-tail" d="M 85 70 Q 95 60 90 50" fill="none" stroke="url(#cf-catGrad)" stroke-width="8" stroke-linecap="round">' +
			'<animate attributeName="d" values="M 85 70 Q 95 60 90 50; M 85 70 Q 100 55 95 45; M 85 70 Q 95 60 90 50" dur="0.8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"/>' +
			'</path>' +
			'</g>' +
			'</svg>';
		//#endregion

		//#region styles
		var CSS =
			'.dsh-pando{position:fixed;top:var(--cf-y,20px);left:var(--cf-x,24px);z-index:45;pointer-events:auto;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;}' +
			'.dsh-pando.dragging{cursor:grabbing;}' +
			'.dsh-pando .cf-pet{position:relative;width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center;}' +
			'.dsh-pando .cf-cat{width:100%;height:100%;filter:drop-shadow(0 6px 12px rgba(146,92,10,0.28));}' +
			'.dsh-pando .cf-cat .cf-body{animation:cf-float 3s ease-in-out infinite;}' +
			'.dsh-pando .cf-cat .cf-ear{animation:cf-ear 4s ease-in-out infinite;transform-origin:center bottom;}' +
			'.dsh-pando .cf-cat .cf-ear-right{animation-delay:0.5s;}' +
			'.dsh-pando .cf-cat .cf-eye{animation:cf-blink 4s ease-in-out infinite;}' +
			'.dsh-pando .cf-cat .cf-eye-right{animation-delay:0.1s;}' +
			'.dsh-pando .cf-cat .cf-whiskers{animation:cf-whisker 2s ease-in-out infinite;}' +
			'.dsh-pando .cf-cat .cf-highlight{animation:cf-sparkle 2s ease-in-out infinite;}' +
			'.dsh-pando .cf-cat.bounce{animation:cf-bounce 0.5s ease;}' +
			'.dsh-pando .cf-canvas{width:100%;height:100%;}' +
			'.dsh-pando .cf-loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#8a6d1f;font:11px/1.4 system-ui,sans-serif;text-align:center;background:rgba(255,251,235,0.55);border-radius:12px;backdrop-filter:blur(2px);z-index:2;}' +
			'.cf-work-symbols{position:absolute;inset:-10px -30px -14px -30px;pointer-events:none;z-index:3;}' +
			'.cf-sym{position:absolute;opacity:0;line-height:1;will-change:transform,opacity;animation:cf-sym-burst 4.5s cubic-bezier(.35,.1,.35,1) infinite;}' +
			// Code symbols: bold monospace, plus a halo. The pastel palette has to
			// stay legible over both light and dark app surfaces, so the glyph gets
			// a thin white contour (which also crisps up the 15px strokes), a soft
			// halo in its own hue (currentColor picks up the inline per-symbol
			// colour) and a faint dark drop for contrast on light backgrounds.
			'.cf-sym-code{display:inline-block;font-weight:900;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;-webkit-text-stroke:0.5px rgba(255,255,255,0.92);text-shadow:0 0 1px rgba(255,255,255,0.95),0 0 4px rgba(255,255,255,0.75),0 0 8px currentColor,0 1px 2px rgba(0,0,0,0.18);}' +
			'.cf-gear{position:absolute;left:-4px;top:0;font-size:42px;line-height:1;z-index:3;filter:drop-shadow(0 2px 4px rgba(0,0,0,.45));}' +
			'.cf-gear .cf-sym-spin{display:inline-block;animation:cf-spin 6s linear infinite;background:linear-gradient(160deg,#ffffff 0%,#dfe6ee 18%,#aeb9c6 45%,#7e8a97 62%,#c3ccd6 76%,#6b7683 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;}' +
			'.cf-loading-dots{position:absolute;right:-34px;top:0;display:flex;gap:6px;z-index:3;}' +
			'.cf-loading-dots .cf-dot{width:8px;height:8px;border-radius:50%;background:#7aa8ff;box-shadow:0 1px 2px rgba(0,0,0,.25);animation:cf-dot-bob .7s ease-in-out infinite;}' +
			'.cf-loading-dots .cf-dot:nth-child(2){animation-delay:.09s;}' +
			'.cf-loading-dots .cf-dot:nth-child(3){animation-delay:.18s;}' +
			'@keyframes cf-dot-bob{0%,100%{transform:translateY(0);}50%{transform:translateY(-13.5px);}}' +
			'.cf-sleep-zs{position:absolute;inset:0;pointer-events:none;z-index:3;}' +
			'.cf-sleep-z{position:absolute;left:100%;top:46%;font:700 16px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#000;text-shadow:0 0 3px rgba(255,255,255,.75),0 1px 2px rgba(0,0,0,.4);opacity:0;animation:cf-z-path 4.5s ease-in-out infinite;}' +
			'@keyframes cf-z-path{' +
			'0%{opacity:0;left:100%;top:46%;font-size:13px;transform:rotate(-5deg);}' +
			'14%{opacity:1;font-size:16px;}' +
			'36%{left:76%;top:8%;font-size:19px;transform:rotate(-2deg);}' +
			'46%{left:73%;top:-7%;font-size:21px;}' +
			'56%{left:73%;top:-11%;font-size:21px;}' +
			'64%{left:90%;top:-16%;font-size:27px;opacity:.5;}' +
			'72%{left:103%;top:-26%;opacity:0;font-size:32px;}' +
			'100%{left:103%;top:-26%;opacity:0;font-size:32px;}}' +
			'.cf-bubble{position:absolute;left:50%;top:-32px;transform:translateX(-50%);z-index:3;background:rgba(255,255,255,.96);color:#4a3a15;border:1px solid rgba(180,140,60,.4);border-radius:10px;padding:4px 11px;font:600 12px/1.4 system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.18);pointer-events:none;white-space:nowrap;animation:cf-bubble-in .25s ease;}' +
			'.cf-bubble::after{content:"";position:absolute;left:50%;bottom:-5px;transform:translateX(-50%);border:5px solid transparent;border-top-color:rgba(255,255,255,.96);}' +
			'@keyframes cf-bubble-in{from{opacity:0;transform:translateX(-50%) translateY(4px);}to{opacity:1;transform:translateX(-50%) translateY(0);}}' +
			'@keyframes cf-sym-burst{' +
			'0%{opacity:0;transform:translate(0,0);}' +
			'10%{opacity:1;}' +
			'20%{transform:translate(0,0);}' +
			'75%{transform:translate(var(--sx),var(--sy));}' +
			'100%{opacity:1;transform:translate(var(--sx),var(--sy));}}' +
			'@keyframes cf-sym-sway{' +
			'0%{transform:translateX(0);}' +
			'25%{transform:translateX(var(--dx1));}' +
			'50%{transform:translateX(0);}' +
			'75%{transform:translateX(var(--dx2));}' +
			'100%{transform:translateX(0);}}' +
			'.dsh-pando.zoom{animation:cf-zoom 1s ease-in-out 2;}' +
			'@keyframes cf-zoom{' +
			'0%{transform:scale(1);}' +
			'40%{transform:scale(1.3);}' +
			'65%{transform:scale(.94);}' +
			'100%{transform:scale(1);}}' +
			'.dsh-pando .cf-spinner{width:20px;height:20px;border:2px solid rgba(146,92,10,0.25);border-top-color:#b8860b;border-radius:50%;animation:cf-spin 0.8s linear infinite;margin-bottom:4px;}' +
			'.cf-menu{position:fixed;z-index:2147483000;min-width:264px;max-width:320px;max-height:70vh;display:flex;flex-direction:column;border-radius:14px;background:rgba(255,251,240,0.96);border:1px solid rgba(180,140,60,0.35);box-shadow:0 10px 32px rgba(80,50,0,0.22);font:12px/1.5 system-ui,sans-serif;color:#4a3a15;overflow:hidden;}' +
			'body.cf-dark .cf-menu,html[data-theme="dark"] .cf-menu{background:rgba(40,36,28,0.97);border-color:rgba(180,150,80,0.3);color:#e8d9a8;}' +
			'.cf-menu-head{padding:10px 12px;border-bottom:1px solid rgba(180,140,60,0.25);display:flex;align-items:center;gap:8px;flex-wrap:wrap;}' +
			'.cf-menu-title{font-weight:700;letter-spacing:0.03em;text-transform:uppercase;font-size:11px;}' +
			'.cf-menu-cur{margin-left:auto;opacity:0.7;font-size:11px;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
			'.cf-menu-sizes{display:flex;gap:4px;}' +
			'.cf-menu-sizes button{font:inherit;border:1px solid rgba(180,140,60,0.4);background:rgba(255,255,255,0.5);border-radius:6px;padding:2px 8px;cursor:pointer;color:inherit;}' +
			'.cf-menu-sizes button.on{background:rgba(214,158,46,0.25);border-color:rgba(180,140,60,0.7);}' +
			'.cf-menu-sizes button:hover{background:rgba(214,158,46,0.18);}' +
			'.cf-menu-states{display:flex;gap:4px;padding:8px 12px 0;}' +
			'.cf-menu-states button{flex:1;font:inherit;font-size:10px;border:1px solid rgba(180,140,60,0.4);background:rgba(255,255,255,0.5);border-radius:6px;padding:3px 0;cursor:pointer;color:inherit;white-space:nowrap;}' +
			'.cf-menu-states button:hover{background:rgba(214,158,46,0.18);}' +
			'.cf-menu-grid{overflow-y:auto;overflow-x:hidden;padding:8px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px;}' +
			'.cf-item{display:flex;flex-direction:column;align-items:center;gap:3px;padding:6px 4px;border-radius:10px;cursor:pointer;border:1px solid transparent;min-width:0;}' +
			'.cf-item:hover{background:rgba(214,158,46,0.14);border-color:rgba(180,140,60,0.35);}' +
			'.cf-item.on{background:rgba(214,158,46,0.22);border-color:rgba(180,140,60,0.6);}' +
			'.cf-item .cf-thumb{width:100%;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:6px;background:repeating-conic-gradient(#efe6cf 0% 25%,#f7f2e3 0% 50%) 0 0/10px 10px;}' +
			'.cf-item .cf-thumb img,.cf-item .cf-thumb svg{width:100%;height:100%;object-fit:contain;display:block;}' +
			'.cf-item .cf-thumb.cf-thumb-grid{background-size:800% 700%;background-position:0 0;background-repeat:no-repeat;}' +
			'.cf-item span{display:flex;align-items:center;justify-content:center;gap:3px;font-size:10px;line-height:1.2;max-width:100%;min-width:0;text-align:center;}' +
			// the name shrinks (ellipsis) while the origin badge always keeps its box
			'.cf-item span .cf-name{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}' +
			'.cf-item span .cf-badge{flex:0 0 auto;}' +
'\n' +
			// sprite-origin pills in the right-click grid: built-in / local / official
			'.cf-item span .cf-badge{display:inline-block;font-style:normal;white-space:nowrap;font-size:8px;line-height:1.4;padding:0 3px;border-radius:4px;}' +
			'.cf-badge-builtin{background:rgba(120,144,156,.22);color:#3f5260;}' +
			'.cf-badge-local{background:rgba(76,175,80,.22);color:#256b2b;}' +
			'.cf-badge-official{background:rgba(33,150,243,.20);color:#0f5bab;}' +
			'body.cf-dark .cf-badge-builtin,html[data-theme="dark"] .cf-badge-builtin{background:rgba(176,196,208,.24);color:#dbe6ee;}' +
			'body.cf-dark .cf-badge-local,html[data-theme="dark"] .cf-badge-local{background:rgba(102,187,106,.26);color:#c8f0c9;}' +
			'body.cf-dark .cf-badge-official,html[data-theme="dark"] .cf-badge-official{background:rgba(66,165,245,.26);color:#cfe6ff;}' +
			'.cf-menu-backdrop{position:fixed;inset:0;z-index:2143000000;background:transparent;}' +
			'@keyframes cf-float{0%,100%{transform:translateY(0);}50%{transform:translateY(-1px);}}' +
			'@keyframes cf-ear{0%,90%,100%{transform:rotate(0deg);}93%{transform:rotate(-5deg);}96%{transform:rotate(3deg);}}' +
			'@keyframes cf-blink{0%,45%,55%,100%{transform:scaleY(1);}50%{transform:scaleY(0.1);}}' +
			'@keyframes cf-whisker{0%,100%{transform:rotate(0deg);}25%{transform:rotate(3deg);}75%{transform:rotate(-3deg);}}' +
			'@keyframes cf-sparkle{0%,100%{opacity:1;}50%{opacity:0.6;}}' +
			'@keyframes cf-bounce{0%{transform:translateY(0) scale(1);}30%{transform:translateY(-8px) scale(1.06,0.94);}60%{transform:translateY(0) scale(0.96,1.04);}100%{transform:translateY(0) scale(1);}}' +
			'.dsh-pando.pop{animation:cf-pop 1.5s ease-in-out 1;}' +
			'@keyframes cf-pop{' +
			'0%{transform:scale(1) translateY(0);}' +
			'8%{transform:scale(1.22) translateY(-9px);}' +
			'20%{transform:scale(0.95,1.06) translateY(0);}' +
			'28%{transform:scale(1.16) translateY(-6px);}' +
			'40%{transform:scale(0.97,1.04) translateY(0);}' +
			'48%{transform:scale(1.11) translateY(-4px);}' +
			'60%{transform:scale(0.98,1.03) translateY(0);}' +
			'68%{transform:scale(1.07) translateY(-2px);}' +
			'80%{transform:scale(0.99,1.02) translateY(0);}' +
			'88%{transform:scale(1.03) translateY(-1px);}' +
			'100%{transform:scale(1) translateY(0);}}' +
			'@keyframes cf-spin{to{transform:rotate(360deg);}}' +
			'@media (prefers-reduced-motion:reduce){.dsh-pando .cf-cat .cf-body,.dsh-pando .cf-cat .cf-ear,.dsh-pando .cf-cat .cf-eye,.dsh-pando .cf-cat .cf-whiskers,.dsh-pando .cf-cat .cf-highlight{animation:none;}.dsh-pando .cf-cat .cf-tail animate{repeatCount:"1";}.cf-sym{animation:none;opacity:.9;transform:none;}.cf-gear .cf-sym-spin{animation:none;}.cf-loading-dots .cf-dot{animation:none;}.cf-bubble{animation:none;}.dsh-pando.pop,.dsh-pando.zoom{animation:none;}.cf-sleep-z{animation:none;opacity:.85;left:30%;top:-8%;}}';
		//#endregion

		//#region chroma key — port of the sprites.confirmo.love pipeline (magenta removal)
		function clamp255(v) { return v < 0 ? 0 : v > 255 ? 255 : Math.round(v); }

		function cfDf(r, g, b) {
			var s = r / 255, o = g / 255, a = b / 255;
			return [s * -0.169 + o * -0.331 + a * 0.5 + 0.5, s * 0.5 + o * -0.419 + a * -0.081 + 0.5];
		}

		function cfAl(r, g, b, amt) {
			var o = Math.min(r, b), a = Math.max(0, o - g);
			if (a <= 0) return [r, g, b];
			var u = a * amt, d = Math.max(g, r - u), f = Math.max(g, b - u);
			return [Math.round(d), g, Math.round(f)];
		}

		function cfSp(r, g, b, s) {
			s = s || 1;
			var o = Math.min(r, b), a = o - g;
			if (r > 200 && b > 200 && g < 80 || r > 180 && b > 180 && g < 60 ||
				a > 40 * s && o > 80 ||
				r > g + 50 * s && b > g + 30 * s && r > 100 && b > 60 ||
				b > g + 50 * s && r > g + 30 * s && b > 100 && r > 60 ||
				r > 150 && b > 150 && g < 180 && g < o * 0.8 && o > 160 ||
				r > 80 && b > 80 && g < 50 && a > 30 * s ||
				r > 180 && b > 180 && g < 120 && g < o * 0.6 ||
				r > 200 && b > 100 && b < 200 && g < 80) return true;
			var u = Math.max(r, g, b), d = Math.min(r, g, b), f = (u + d) / 2 / 255, p = u - d;
			if (p > 50) {
				var hue = 0;
				if (u === r) hue = ((g - b) / p + (g < b ? 6 : 0)) * 60;
				else if (u === g) hue = ((b - r) / p + 2) * 60;
				else hue = ((r - g) / p + 4) * 60;
				if (hue >= 270 - 30 * s && hue <= 330 + 30 * s && f > 0.2 && f < 0.9) return true;
			}
			return false;
		}

		function cfKeyColor(data, w, h) {
			var samples = [];
			var pick = function (x, y) {
				var i = (y * w + x) * 4;
				if (data[i + 3] < 128) return;
				samples.push({ r: data[i], g: data[i + 1], b: data[i + 2] });
			};
			var sx = Math.max(1, Math.floor(w / 128));
			for (var x = 0; x < w; x += sx) { pick(x, 0); pick(x, 1); pick(x, h - 1); pick(x, h - 2); }
			var sy = Math.max(1, Math.floor(h / 128));
			for (var y = 0; y < h; y += sy) { pick(0, y); pick(1, y); pick(w - 1, y); pick(w - 2, y); }
			for (var a = 0; a < 5; a++) for (var b = 0; b < 5; b++) { pick(a, b); pick(w - 1 - a, b); pick(a, h - 1 - b); pick(w - 1 - a, h - 1 - b); }
			if (samples.length === 0) return { r: 255, g: 0, b: 255, mode: "magenta" };
			var d = 0, fr = 0, fg = 0, fb = 0, rd = 0, rr = 0, rg = 0, rb = 0;
			for (var i = 0; i < samples.length; i++) {
				var R = samples[i].r, G = samples[i].g, B = samples[i].b;
				var A = Math.min(R, B) - G, M = R - Math.max(G, B);
				if (A > 30 && R > 70 && B > 70 || R > G + 40 && B > G + 20 && R > 80 && B > 50 ||
					B > G + 40 && R > G + 20 && B > 80 && R > 50 ||
					R > 180 && B > 180 && G < 100 ||
					R > 150 && B > 150 && G < R * 0.5 && G < B * 0.5) {
					d++; fr += R; fg += G; fb += B;
				} else if (M > 50 && R > 100) {
					rd++; rr += R; rg += G; rb += B;
				}
			}
			if (d > rd && d > 2) return { r: Math.round(fr / d), g: Math.round(fg / d), b: Math.round(fb / d), mode: "magenta" };
			if (rd > 4) return { r: Math.round(rr / rd), g: Math.round(rg / rd), b: Math.round(rb / rd), mode: "red" };
			if (d > 0) return { r: Math.round(fr / d), g: Math.round(fg / d), b: Math.round(fb / d), mode: "magenta" };
			return { r: 255, g: 0, b: 255, mode: "unknown" };
		}

		function cfDistance(flags, w, h, max) {
			var n = w * h, dist = new Uint8Array(n);
			dist.fill(255);
			var q = [];
			for (var i = 0; i < n; i++) if (flags[i]) { dist[i] = 0; q.push(i); }
			var d = 0;
			while (d < q.length) {
				var idx = q[d++], v = dist[idx];
				if (v >= max) continue;
				var cx = idx % w, cy = (idx / w) | 0, nv = v + 1;
				var push = function (j) { if (dist[j] > nv) { dist[j] = nv; q.push(j); } };
				if (cx > 0) push(idx - 1);
				if (cx < w - 1) push(idx + 1);
				if (cy > 0) push(idx - w);
				if (cy < h - 1) push(idx + w);
			}
			return dist;
		}

		/** Remove the magenta chroma-key background from a canvas in place. */
		function chromaKey(canvas, w, h) {
			var ctx = canvas.getContext("2d");
			var img = ctx.getImageData(0, 0, w, h), a = img.data;
			var key = cfKeyColor(a, w, h), keyR = key.r, keyG = key.g, keyB = key.b;
			var similarity = 0.5, smoothness = 0.1, spill = 0.2;
			// Wider tolerance for the background flood only: some community sheets
			// use an off-spec dark purple (e.g. Doraemon ~#B818A0) whose distance
			// from the edge-derived key sits in the 100-140 band. The feather /
			// white-mask gates keep the tighter 0.5 so pink character parts stay
			// protected.
			var floodSim = 0.7;
			var n = w * h;
			var keyed = new Uint8Array(n);
			var dist2 = function (R, G, B) {
				var H = R - keyR, T = G - keyG, re = B - keyB;
				return Math.sqrt(H * H + T * T * 2 + re * re);
			};
			var isKey = function (i, v) {
				var k = i * 4;
				if (a[k + 3] < 16) return true;
				var R = a[k], G = a[k + 1], B = a[k + 2];
				// Distance to the detected key color only. The sp() hue shortcut
				// would also match pink/red character parts (hearts, blush) and
				// the flood would eat them; distance keeps them safe while the
				// real magenta background (dist ~0-60) is fully keyed.
				return dist2(R, G, B) < 200 * floodSim * v;
			};
			var queue = [];
			var mark = function (i, v) {
				if (keyed[i] || !isKey(i, v)) return false;
				keyed[i] = 1; queue.push(i); return true;
			};
			for (var x = 0; x < w; x++) { mark(x, 1.2); mark((h - 1) * w + x, 1.2); }
			for (var y = 0; y < h; y++) { mark(y * w, 1.2); mark(y * w + (w - 1), 1.2); }
			var q = 0;
			while (q < queue.length) {
				var idx = queue[q++], cx = idx % w, cy = (idx / w) | 0;
				if (cx > 0) mark(idx - 1);
				if (cx < w - 1) mark(idx + 1);
				if (cy > 0) mark(idx - w);
				if (cy < h - 1) mark(idx + w);
				if (cx > 0 && cy > 0) mark(idx - w - 1);
				if (cx < w - 1 && cy > 0) mark(idx - w + 1);
				if (cx > 0 && cy < h - 1) mark(idx + w - 1);
				if (cx < w - 1 && cy < h - 1) mark(idx + w + 1);
			}
			var white = new Uint8Array(n);
			for (var i = 0; i < n; i++) {
				if (keyed[i]) continue;
				var k = i * 4, R = a[k], G = a[k + 1], B = a[k + 2];
				if (R > 200 && B > 200 && G < 50) white[i] = 1;
			}
			var grow = function (mask) {
				var add = [];
				for (var i = 0; i < n; i++) {
					if (!mask[i]) continue;
					var cx = i % w, cy = (i / w) | 0;
					var chk = function (j) {
						if (mask[j]) return;
						var k = j * 4;
						if (a[k + 3] < 16) return;
						var R = a[k], G = a[k + 1], B = a[k + 2];
						if (cfSp(R, G, B, 1.3) && dist2(R, G, B) < 200 * similarity * 1.3) add.push(j);
					};
					if (cx > 0) chk(i - 1);
					if (cx < w - 1) chk(i + 1);
					if (cy > 0) chk(i - w);
					if (cy < h - 1) chk(i + w);
				}
				for (var j = 0; j < add.length; j++) mask[add[j]] = 1;
			};
			for (var t = 0; t < 3; t++) grow(white);
			for (var i = 0; i < n; i++) if (white[i]) keyed[i] = 1;
			var K = 8, dist = cfDistance(keyed, w, h, K);
			for (var i = 0; i < n; i++) {
				var k = i * 4, origA = a[k + 3];
				if (keyed[i]) { a[k + 3] = 0; continue; }
				if (origA === 0) continue;
				var R = a[k], G = a[k + 1], B = a[k + 2];
				var dd = dist[i], minRB = Math.min(R, B) - G;
				if (dd <= K) {
					var qq = dd / K, feather = 0;
					var dfrom = dist2(R, G, B);
					// feather only pixels that are genuinely close to the key color
					// (sp alone would also hit pink hearts inside the 8px band)
					if (cfSp(R, G, B, 1.5) && dfrom < 200 * similarity * 1.5) feather = 0.8;
					else if (minRB > 20) feather = Math.min(1, minRB / 120) * 0.6;
					var alphaBoost = Math.max(0, 1 - dfrom / 250) * 0.4;
					var F = Math.max(feather, alphaBoost);
					if (F > 0.1) {
						var fe = 1 - F * (1 - qq * 0.6) * (1 - smoothness);
						if (fe < 0.05) { a[k + 3] = 0; continue; }
						var newA = Math.round(origA * fe);
						a[k + 3] = newA < 8 ? 0 : newA;
						if (a[k + 3] === 0) continue;
					}
					if (minRB > 0) {
						var ge = spill * (2 - qq) * Math.min(1, minRB / 40);
						var t2 = cfAl(R, G, B, ge);
						a[k] = t2[0]; a[k + 1] = t2[1]; a[k + 2] = t2[2];
					}
					var ee = a[k + 3] / 255;
					if (ee > 0.05 && ee < 0.9) {
						var inv = 1 / ee, bg = 1 - ee;
						a[k] = clamp255((a[k] - bg * keyR) * inv);
						a[k + 1] = clamp255((a[k + 1] - bg * keyG) * inv);
						a[k + 2] = clamp255((a[k + 2] - bg * keyB) * inv);
					}
				} else if (minRB > 10) {
					var ge2 = spill * 0.5 * Math.min(1, minRB / 60);
					var t3 = cfAl(R, G, B, ge2);
					a[k] = t3[0]; a[k + 1] = t3[1]; a[k + 2] = t3[2];
				}
			}
			for (var i = 0; i < n; i++) {
				var k = i * 4;
				if (a[k + 3] === 0) continue;
				var R = a[k], G = a[k + 1], B = a[k + 2];
				if (R > 220 && B > 220 && G < 30) a[k + 3] = 0;
			}
			ctx.putImageData(img, 0, 0);
		}
		//#endregion

		//#region sprite engine
		var COLS = 8, ROWS = 7;
		// animation rows (1-based per the sprites.confirmo.love spec)
		var ROW_IDLE = 0, ROW_HAPPY = 1, ROW_EXCITED = 2, ROW_SLEEPY = 3, ROW_WORKING = 4, ROW_ANGRY = 5, ROW_DRAG = 6;

		//#region IndexedDB cache of processed (chroma-keyed) sprite sheets
		var IDB_NAME = "dsh-pando";
		var IDB_STORE = "sheets";
		// two resolution levels, evicted separately:
		//   "full" — full-res keyed sheet (512px frames), few, hottest
		//   "mid"  — keyed sheet downscaled to 3072 (384px frames), covers many sprites
		var IDB_MAX = { full: 12, mid: 60 };
		var idbPromise = null;
		function openDb() {
			if (idbPromise) return idbPromise;
			idbPromise = new Promise(function (resolve, reject) {
				try {
					var req = indexedDB.open(IDB_NAME, 4);
					req.onupgradeneeded = function () {
						var db = req.result;
						// Every cache-schema / chroma-key algorithm change bumps the
						// DB version and drops stale keyed results, so fixes like the
						// Doraemon dark-purple background apply without manual clearing.
						if (db.objectStoreNames.contains(IDB_STORE)) {
							db.deleteObjectStore(IDB_STORE);
						}
						db.createObjectStore(IDB_STORE, { keyPath: "id" });
					};
					req.onsuccess = function () { resolve(req.result); };
					req.onerror = function () { reject(req.error || new Error("indexedDB open failed")); };
					req.onblocked = function () { reject(new Error("indexedDB open blocked")); };
				} catch (e) { reject(e); }
			});
			return idbPromise;
		}
		// Cache identity: the sprite id plus an optional `cacheVersion`. Local
		// sprites discovered on disk carry the sheet's mtime, so re-generating a
		// sheet (same id, new pixels) never reuses a stale cached copy — the
		// failure mode that once pinned an old MJ sheet ("feet in the head").
		function cacheKey(sprite, level) {
			return sprite.id + (sprite.cacheVersion ? "@" + sprite.cacheVersion : "") + "#" + level;
		}
		function cacheGet(sprite, level) {
			return openDb().then(function (db) {
				return new Promise(function (resolve, reject) {
					var tx = db.transaction(IDB_STORE, "readonly");
					var req = tx.objectStore(IDB_STORE).get(cacheKey(sprite, level));
					req.onsuccess = function () {
						var rec = req.result;
						// version check: url change (new upload) invalidates the entry
						if (rec && rec.url === sprite.spriteUrl) resolve(rec.blob);
						else resolve(null);
					};
					req.onerror = function () { reject(req.error); };
				});
			}).catch(function () { return null; });   // cache unavailable -> miss
		}
		// cacheGet must never hang sprite loading: settle as a miss if IDB stalls
		var cacheGetSafe = function (sprite, level) {
			return new Promise(function (resolve) {
				var done = false;
				var finish = function (v) { if (!done) { done = true; resolve(v); } };
				cacheGet(sprite, level).then(finish, function () { finish(null); });
				setTimeout(function () { finish(null); }, 3000);
			});
		};
		function cachePut(sprite, level, blob) {
			return openDb().then(function (db) {
				return new Promise(function (resolve, reject) {
					var tx = db.transaction(IDB_STORE, "readwrite");
					var store = tx.objectStore(IDB_STORE);
					store.put({ id: cacheKey(sprite, level), url: sprite.spriteUrl, blob: blob, ts: Date.now() });
					// LRU-ish eviction per level: keep the newest IDB_MAX[level] records
					var all = store.getAll();
					all.onsuccess = function () {
						var recs = (all.result || []).filter(function (r) {
							return r.id && r.id.indexOf("#") > 0 && r.id.slice(r.id.indexOf("#") + 1) === level;
						});
						var max = IDB_MAX[level] || 15;
						if (recs.length > max) {
							recs.sort(function (a, b) { return (b.ts || 0) - (a.ts || 0); });
							for (var i = max; i < recs.length; i++) store.delete(recs[i].id);
						}
					};
					tx.oncomplete = function () { resolve(); };
					tx.onerror = function () { reject(tx.error); };
					tx.onabort = function () { reject(tx.error || new Error("aborted")); };
				});
			}).catch(function () {});
		}
		function sheetFromBlob(blob, sprite) {
			// fast path: decoded cached keyed sheet -> split frames (no keying)
			return new Promise(function (resolve, reject) {
				var url = URL.createObjectURL(blob);
				var img = new Image();
				img.onload = function () {
					try {
						var w = img.naturalWidth, h = img.naturalHeight;
						var c = document.createElement("canvas");
						c.width = w; c.height = h;
						var g = c.getContext("2d");
						g.drawImage(img, 0, 0);
						URL.revokeObjectURL(url);
						resolve(splitFrames(c, w, h));
					} catch (e) { URL.revokeObjectURL(url); reject(e); }
				};
				img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("cached sheet decode failed")); };
				img.src = url;
			});
		}
		function splitFrames(c, w, h) {
			var frameScale = Math.min(1, 512 / (w / COLS));
			var fw = w / COLS * frameScale, fh = h / ROWS * frameScale;
			var frames = [];
			for (var r = 0; r < ROWS; r++) {
				var rowFrames = [];
				for (var x = 0; x < COLS; x++) {
					var fc = document.createElement("canvas");
					fc.width = Math.max(1, Math.round(fw));
					fc.height = Math.max(1, Math.round(fh));
					var fg = fc.getContext("2d");
					fg.imageSmoothingEnabled = true;
					fg.clearRect(0, 0, fc.width, fc.height);
					fg.drawImage(c,
						Math.round(x * w / COLS), Math.round(r * h / ROWS), Math.round(w / COLS), Math.round(h / ROWS),
						0, 0, fc.width, fc.height);
					rowFrames.push(fc);
				}
				frames.push(rowFrames);
			}
			return { frames: frames, aspect: fw / fh, sheetW: w, sheetH: h };
		}
		function persistSheet(sprite, canvas) {
			// fire-and-forget: encode the keyed sheet at full res ("full") and at a
			// downscaled 3072 max dim ("mid", 384px frames) — two WebP blobs
			try {
				canvas.toBlob(function (blob) {
					if (blob) cachePut(sprite, "full", blob);
				}, "image/webp", 0.92);
			} catch (e) {}
			try {
				var w = canvas.width, h = canvas.height;
				var scale = Math.min(1, 3072 / Math.max(w, h));
				if (scale >= 1) return;   // sheet already <= 3072: mid == full, skip duplicate
				var mw = Math.max(1, Math.round(w * scale)), mh = Math.max(1, Math.round(h * scale));
				var m = document.createElement("canvas");
				m.width = mw; m.height = mh;
				var mg = m.getContext("2d");
				mg.imageSmoothingEnabled = true;
				mg.drawImage(canvas, 0, 0, mw, mh);
				m.toBlob(function (blob) {
					if (blob) cachePut(sprite, "mid", blob);
				}, "image/webp", 0.92);
			} catch (e) {}
		}
		//#endregion

		function loadSpriteSheet(sprite) {
			return cacheGetSafe(sprite, "full").then(function (full) {
				if (full) return sheetFromBlob(full, sprite);
				return cacheGetSafe(sprite, "mid").then(function (mid) {
					if (mid) return sheetFromBlob(mid, sprite);
				return new Promise(function (resolve, reject) {
					var img = new Image();
					img.crossOrigin = "anonymous";
					img.onload = function () {
						try {
							var w = img.naturalWidth, h = img.naturalHeight;
							if (sprite.preprocessed) {
								// built-in sprites are pre-keyed + frame-centered at build time:
								// skip chroma-keying, slice the frames directly
								var c2 = document.createElement("canvas");
								c2.width = w; c2.height = h;
								var g2 = c2.getContext("2d");
								g2.drawImage(img, 0, 0);
								var result2 = splitFrames(c2, w, h);
								resolve(result2);
								return;
							}
							// Key the magenta at a reduced working resolution (fast), then
							// carry that alpha mask onto the FULL-resolution image so the
							// frames keep all original detail (crisper than the macOS app
							// at the same display size).
							var scale = Math.min(1, 2048 / Math.max(w, h));
							var workW = Math.max(1, Math.round(w * scale));
							var workH = Math.max(1, Math.round(h * scale));
							var work = document.createElement("canvas");
							work.width = workW; work.height = workH;
							var wg = work.getContext("2d");
							wg.imageSmoothingEnabled = true;
							wg.drawImage(img, 0, 0, workW, workH);
							chromaKey(work, workW, workH);

							var c = document.createElement("canvas");
							c.width = w; c.height = h;
							var g = c.getContext("2d");
							g.drawImage(img, 0, 0);                       // full-res RGB
							if (workW !== w || workH !== h) {
								g.globalCompositeOperation = "destination-in";  // keep full-res RGB, take keyed alpha (upscaled)
								g.drawImage(work, 0, 0, workW, workH, 0, 0, w, h);
								g.globalCompositeOperation = "source-over";
							}

							var result = splitFrames(c, w, h);
							persistSheet(sprite, c);   // async cache write, never blocks display
							resolve(result);
						} catch (err) { reject(err); }
					};
					img.onerror = function () {
						// local disk-cache route unavailable (old node half) -> CDN directly
						if (!img.__cfFallback) {
							img.__cfFallback = true;
							img.src = sprite.spriteUrl;
							return;
						}
						reject(new Error("sprite image load failed"));
					};
					// built-in local sprites load straight from the bundled asset route;
					// remote sheets go through the node disk-cache route (same-origin,
					// persistent on disk) and fall back to the CDN above
					if (sprite.local) {
						img.src = sprite.spriteUrl;
					} else {
						img.src = "/pando/sprite/" + encodeURIComponent(sprite.id) + "?url=" + encodeURIComponent(sprite.spriteUrl);
					}
				});
				});
			});
		}
		//#endregion

		//#region settings pages (Plugins page slots)
		// The Plugins page renders a plugin's own configuration instead of the
		// schema-generated form in Settings. The Config schema alone is not
		// enough: the page only shows an entry point when the matching slot is
		// registered, so two registrations are needed —
		//
		//   plugins.bundle.config, keyed by the PACKAGE name: renders on the
		//     bundle's detail page between its description and its rows. The page
		//     renders that section only while `ledger.bundles.has(packageName)`
		//     is true, i.e. exactly when this key is registered.
		//
		//   plugins.row.config, keyed by "<package>#<row id>": gives that row a
		//     Configure control and renders the row's own page.
		//
		// A row page is handed `form = { state, mutate(operations, revision) }` by
		// the page; a bundle page is not, because a bundle can hold several
		// entries and has no single form. That page therefore reads the shared
		// settings surface itself and degrades to a read-only view (plus the YAML
		// alternative) when no settings surface is mounted.
		//
		// Everything in this region is optional: the desktop pet must mount and
		// behave identically whether or not React, the slots service, the settings
		// surfaces, or all of them are available.
		var CONFIG_PACKAGE = "@purezhi/dsh-plugin-pando";
		var CONFIG_ROW_ID = "pando";
		var CONFIG_ROW_KEY = CONFIG_PACKAGE + "#" + CONFIG_ROW_ID;
		var CONFIG_DICT_NS = "pandoSettings";
		var CONFIG_YAML =
			"- id: pando\n" +
			"  config:\n" +
			"    spriteDir: ~/my-sprites\n" +
			"    cacheDir: ~/pando-cache";

		/** Copy shown by the settings pages; also registered as the locale dictionary. */
		var CONFIG_TEXT = {
			en: {
				title: "Pando settings",
				summary: "Local sprite directory and community sprite cache.",
				spriteDir: "Local sprite directory",
				spriteDirHint: "Holds <name>/sheet.png sprites, searched before the bundled ones.",
				spriteDirPlaceholder: "empty: bundled sprites only",
				cacheDir: "Sprite cache directory",
				cacheDirHint: "Where community sprite sheets downloaded from the gallery are stored.",
				cacheDirPlaceholder: "empty: schema default",
				save: "Save",
				saving: "Saving…",
				reset: "Reset to default",
				saved: "Saved. The plugin reloads with the new directories.",
				conflict: "This configuration changed elsewhere. Reopen the page and apply your values again.",
				failed: "The deployment did not accept these values.",
				loading: "Loading configuration…",
				readOnly: "This deployment exposes no editable settings surface for this plugin, so the effective values are shown read-only.",
				unavailable: "The settings service does not serve this plugin, so the effective values are shown read-only."
			},
			zh: {
				title: "Pando 设置",
				summary: "本地精灵图目录与社区精灵图缓存目录。",
				spriteDir: "本地精灵图目录",
				spriteDirHint: "放置 <名称>/sheet.png 精灵图，优先于内置精灵图。",
				spriteDirPlaceholder: "留空：仅使用内置精灵图",
				cacheDir: "精灵图缓存目录",
				cacheDirHint: "存放从图库下载的社区精灵图。",
				cacheDirPlaceholder: "留空：使用默认值",
				save: "保存",
				saving: "保存中…",
				reset: "恢复默认",
				saved: "已保存。插件会以新目录重新加载。",
				conflict: "配置已在其它地方被修改，请重新打开本页并再次保存。",
				failed: "本部署没有接受这些值。",
				loading: "正在读取配置…",
				readOnly: "本部署没有为该插件提供可编辑的设置界面，以下为当前生效值（只读）。",
				unavailable: "设置服务未提供该插件，以下为当前生效值（只读）。"
			}
		};

		/** Inline styles: the pages live on the Plugins page, so they follow its CSS variables. */
		var CONFIG_STYLE = {
			form: { maxWidth: "560px", margin: "0", color: "var(--dsw-alias-label-primary, inherit)" },
			field: { display: "flex", flexDirection: "column", gap: "4px", margin: "0 0 12px" },
			label: { fontSize: "12px", color: "var(--dsw-alias-label-primary, inherit)" },
			hint: { fontSize: "12px", margin: "0", color: "var(--dsw-alias-label-tertiary, #8a8a90)" },
			input: {
				font: "inherit", fontSize: "13px", padding: "6px 8px", borderRadius: "6px",
				border: "1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.2))",
				background: "var(--dsw-alias-bg-primary, transparent)",
				color: "var(--dsw-alias-label-primary, inherit)"
			},
			row: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", marginTop: "4px" },
			button: {
				font: "inherit", fontSize: "13px", padding: "5px 12px", borderRadius: "6px", cursor: "pointer",
				border: "1px solid var(--dsw-alias-border-l2, rgba(0,0,0,.2))",
				background: "var(--dsw-alias-bg-primary, transparent)",
				color: "var(--dsw-alias-label-primary, inherit)"
			},
			ok: { fontSize: "12px", margin: "8px 0 0", color: "var(--dsw-alias-state-success-primary, #2e7d32)" },
			err: { fontSize: "12px", margin: "8px 0 0", color: "var(--dsw-alias-state-danger-primary, #c62828)" },
			code: { fontSize: "12px", margin: "8px 0 0", whiteSpace: "pre-wrap", color: "var(--dsw-alias-label-tertiary, #8a8a90)" }
		};

		// ---- registration state (one bundle factory = one module instance) ----
		var react = null;                 // require("react"), when the loader provides it
		var configSlotsOwner = null;      // fiber owning the live slot registration
		var configSlotsDispose = null;    // its disposer (clears the claim above)
		var configFormsService = null;    // optional ctx.configForms (shared settings forms)
		var configRemoteSettings = null;   // optional ctx.remote.settings namespace
		// The pet itself lives inside apply(); the settings form (module scope)
		// asks it to re-read the sprite lists after a successful save, so a new
		// spriteDir is reflected immediately instead of after a page reload.
		var pandoRefreshSprites = null;

		/** Translate one settings string: the page's locale seat, else the built-in dictionary. */
		function configTranslator(t) {
			return function (key, params) {
				var text;
				if (typeof t === "function") {
					try { text = t(key, params); } catch (e) { text = undefined; }
				}
				if (text === undefined || text === key) {
					var zh = false;
					try {
						zh = /^zh/i.test(navigator.language || "") ||
							/^zh/i.test((document.documentElement && document.documentElement.lang) || "");
					} catch (e) { zh = false; }
					text = (zh ? CONFIG_TEXT.zh : CONFIG_TEXT.en)[key];
					if (text === undefined) text = key;
					if (params) {
						text = String(text).replace(/\{(\w+)\}/g, function (match, name) {
							return name in params ? String(params[name]) : match;
						});
					}
				}
				return text;
			};
		}

		/** The editable fields of one namespace value. */
		function configDraft(value) {
			var v = value && typeof value === "object" ? value : {};
			return {
				spriteDir: v.spriteDir === undefined || v.spriteDir === null ? "" : String(v.spriteDir),
				cacheDir: v.cacheDir === undefined || v.cacheDir === null ? "" : String(v.cacheDir)
			};
		}

		/** One atomic write: both fields, so a form save never lands half-applied. */
		function configOps(draft) {
			return [
				{ op: "set", path: ["spriteDir"], value: String(draft.spriteDir || "").trim() },
				{ op: "set", path: ["cacheDir"], value: String(draft.cacheDir || "").trim() }
			];
		}

		/** Drop the overrides so the schema defaults apply again (`unset` restores inheritance). */
		var CONFIG_RESET_OPS = [
			{ op: "unset", path: ["spriteDir"] },
			{ op: "unset", path: ["cacheDir"] }
		];

		/** Outcome of a write, shaped like the remote result or a boolean from a page form. */
		function configOutcome(res, tr) {
			if (res === true || (res && res.ok === true)) return { kind: "ok", text: tr("saved") };
			var code = res && res.error ? String(res.error.code || "") : "";
			return { kind: "error", text: code.indexOf("conflict") >= 0 ? tr("conflict") : tr("failed") };
		}

		/** Failure text for a rejected write (transport errors land here too). */
		function configFailure(err, tr) {
			var code = String((err && (err.code || err.message)) || err || "");
			return { kind: "error", text: code.indexOf("conflict") >= 0 ? tr("conflict") : tr("failed") };
		}

		/**
		 * The settings card. `props.form` is either the row page's
		 * `{ state, mutate(operations, revision) }` or the bundle page's
		 * equivalent face; without one the effective values are shown read-only
		 * with the YAML alternative.
		 */
		function PandoConfigForm(props) {
			var tr = configTranslator(props.t);
			var form = props.form || null;
			var state = (form && form.state) || null;
			var revision = state ? state.revision : undefined;
			// Without a form there is nothing to write through: the fields are a
			// read-only view of the effective values.
			var writable = !!form && (!state || state.writable !== false);
			var incoming = configDraft(form ? state && state.value : props.values);
			var key = String(revision) + "|" + incoming.spriteDir + "|" + incoming.cacheDir;
			var draftPair = react.useState(function () { return incoming; });
			var draft = draftPair[0], setDraft = draftPair[1];
			var statusPair = react.useState(null);
			var status = statusPair[0], setStatus = statusPair[1];
			var busyPair = react.useState(false);
			var busy = busyPair[0], setBusy = busyPair[1];
			var dirty = react.useRef(false);
			var lastKey = react.useRef(key);

			// A value that arrives (or changes) after the first render replaces the
			// draft, unless the editor already typed something: staged edits survive.
			react.useEffect(function () {
				if (lastKey.current === key) return;
				lastKey.current = key;
				if (dirty.current) return;
				setDraft(incoming);
			}, [key]);

			function submit(ops) {
				if (!form || busy || !writable) return;
				setBusy(true);
				setStatus(null);
				var result;
				try {
					result = form.mutate(ops, revision);
				} catch (e) {
					result = Promise.reject(e);
				}
				Promise.resolve(result).then(function (res) {
					setBusy(false);
					var outcome = configOutcome(res, tr);
					if (outcome.kind === "ok") {
						dirty.current = false;
						// live effect: the node half resolves spriteDir per request, so
						// re-reading the lists is enough — no restart, no reload
						try { if (pandoRefreshSprites) pandoRefreshSprites(); } catch (e) {}
					}
					setStatus(outcome);
				}, function (err) {
					setBusy(false);
					setStatus(configFailure(err, tr));
				});
			}

			function edit(field, text) {
				dirty.current = true;
				var next = configDraft(draft);
				next[field] = text;
				setDraft(next);
			}

			function field(id, labelKey, hintKey, placeholderKey, value) {
				return react.createElement("label", { key: id, style: CONFIG_STYLE.field, htmlFor: "cf-cfg-" + id },
					react.createElement("span", { style: CONFIG_STYLE.label }, tr(labelKey)),
					react.createElement("input", {
						id: "cf-cfg-" + id,
						type: "text",
						value: value,
						disabled: busy || !writable,
						spellCheck: false,
						autoComplete: "off",
						placeholder: tr(placeholderKey),
						style: CONFIG_STYLE.input,
						onChange: function (e) { edit(id, e.target.value); }
					}),
					react.createElement("span", { style: CONFIG_STYLE.hint }, tr(hintKey))
				);
			}

			var actions = form ? react.createElement("div", { key: "actions", style: CONFIG_STYLE.row },
				react.createElement("button", {
					type: "button",
					style: CONFIG_STYLE.button,
					disabled: busy || !writable,
					onClick: function () { submit(configOps(draft)); }
				}, busy ? tr("saving") : tr("save")),
				react.createElement("button", {
					type: "button",
					style: CONFIG_STYLE.button,
					disabled: busy || !writable,
					onClick: function () { submit(CONFIG_RESET_OPS); }
				}, tr("reset"))
			) : null;

			var resultLine = status ? react.createElement("p", {
				key: "status",
				role: status.kind === "ok" ? "status" : "alert",
				style: status.kind === "ok" ? CONFIG_STYLE.ok : CONFIG_STYLE.err
			}, status.text) : null;

			var readOnlyNote = form && writable ? null : react.createElement("div", { key: "readonly" },
				react.createElement("p", { style: CONFIG_STYLE.hint },
					props.note ? tr(props.note) : tr("readOnly")),
				react.createElement("pre", { style: CONFIG_STYLE.code }, CONFIG_YAML)
			);

			return react.createElement("div", { style: CONFIG_STYLE.form, "data-pando-config": true },
				field("spriteDir", "spriteDir", "spriteDirHint", "spriteDirPlaceholder", draft.spriteDir),
				field("cacheDir", "cacheDir", "cacheDirHint", "cacheDirPlaceholder", draft.cacheDir),
				actions,
				resultLine,
				readOnlyNote
			);
		}

		/** A local observable face the bundle page renders: `{ getState, subscribe, start, mutate }`. */
		function configFaceState(note) {
			return { status: "loading", value: undefined, revision: undefined, writable: false, note: note || "" };
		}

		/** Listeners shared by every face. */
		function configFaceListeners() {
			var listeners = [];
			return {
				subscribe: function (cb) {
					listeners.push(cb);
					return function () {
						var i = listeners.indexOf(cb);
						if (i >= 0) listeners.splice(i, 1);
					};
				},
				emit: function () {
					for (var i = 0; i < listeners.length; i++) {
						try { listeners[i](); } catch (e) { /* one render must not stop the others */ }
					}
				}
			};
		}

		/** Face over the settings domain's shared form service (the official client mechanism). */
		function createConfigFormsFace(form) {
			var bus = configFaceListeners();
			var state = configFaceState();
			return {
				getState: function () {
					var snap = form.getSnapshot();
					if (snap.status === "unavailable") {
						state.status = "ready";
						state.writable = false;
						state.note = "unavailable";
						return state;
					}
					if (snap.status !== "ready") return state;
					state.status = "ready";
					state.value = snap.value;
					state.revision = snap.revision;
					state.writable = snap.writable !== false;
					state.note = "";
					return state;
				},
				subscribe: bus.subscribe,
				start: function () { /* the shared form loads itself */ },
				mutate: function (ops, revision) { return form.mutate(ops, revision); }
			};
		}

		/** Face over the raw `remote.settings` namespace, for clients without the form service. */
		function createRemoteSettingsFace(settings) {
			var bus = configFaceListeners();
			var state = configFaceState();
			var started = false;
			function adopt(view) {
				if (!view) return;
				state.status = "ready";
				state.value = view.value && typeof view.value === "object" ? view.value : {};
				state.revision = view.revision;
				state.writable = true;
				state.note = "";
				bus.emit();
			}
			return {
				getState: function () { return state; },
				subscribe: bus.subscribe,
				start: function () {
					if (started) return;
					started = true;
					Promise.resolve().then(function () {
						return settings.describe();
					}).then(function (res) {
						if (!res || res.ok !== true) {
							state.status = "ready";
							state.note = "unavailable";
							bus.emit();
							return;
						}
						var list = (res.value && res.value.namespaces) || [];
						var found = null;
						for (var i = 0; i < list.length; i++) {
							if (list[i] && list[i].ns === CONFIG_ROW_ID) found = list[i];
						}
						if (!found) {
							state.status = "ready";
							state.note = "unavailable";
							bus.emit();
							return;
						}
						state.status = "ready";
						state.value = found.value && typeof found.value === "object" ? found.value : {};
						state.revision = found.revision;
						state.writable = res.value.writable !== false;
						state.note = "";
						bus.emit();
					}, function () {
						state.status = "ready";
						state.note = "unavailable";
						bus.emit();
					});
				},
				mutate: function (ops, revision) {
					return settings.mutate(CONFIG_ROW_ID, ops, revision).then(function (res) {
						if (res && res.ok === true) adopt(res.value);
						return res;
					});
				}
			};
		}

		/** Face with no settings surface at all: the host's own self-check route, read-only. */
		function createReadOnlyFace() {
			var bus = configFaceListeners();
			var state = configFaceState("readOnly");
			var started = false;
			return {
				getState: function () { return state; },
				subscribe: bus.subscribe,
				start: function () {
					if (started) return;
					started = true;
					try {
						fetch("/pando/info", { signal: AbortSignal.timeout(5000) })
							.then(function (r) { return r.ok ? r.json() : null; })
							.then(function (info) {
								state.status = "ready";
								state.writable = false;
								state.value = {
									spriteDir: info && info.spriteDir ? String(info.spriteDir) : "",
									cacheDir: info && info.cacheDir ? String(info.cacheDir) : ""
								};
								bus.emit();
							}, function () { state.status = "ready"; bus.emit(); });
					} catch (e) {
						state.status = "ready";
					}
				},
				mutate: null
			};
		}

		/** Prefer the shared form service, then the raw remote namespace, then a read-only view. */
		function resolveConfigFace() {
			try {
				if (configFormsService && typeof configFormsService.get === "function") {
					var form = configFormsService.get(CONFIG_ROW_ID);
					if (form && typeof form.getSnapshot === "function" && typeof form.mutate === "function") {
						return createConfigFormsFace(form);
					}
				}
			} catch (e) { /* fall through to the next surface */ }
			try {
				if (configRemoteSettings && typeof configRemoteSettings.describe === "function") {
					return createRemoteSettingsFace(configRemoteSettings);
				}
			} catch (e) { /* fall through to read-only */ }
			return createReadOnlyFace();
		}

		/**
		 * Self-resolving page: used for `plugins.bundle.config` (which is handed
		 * only `{ view: 'page' }`) and as the row page's fallback when the page
		 * passed no form.
		 */
		function PandoSettingsPage(props) {
			var tr = configTranslator(props.t);
			var facePair = react.useState(resolveConfigFace);
			var face = facePair[0];
			var snapPair = react.useState(function () { return face.getState(); });
			var snapshot = snapPair[0], setSnapshot = snapPair[1];

			react.useEffect(function () {
				var notify = function () { setSnapshot(face.getState()); };
				var off = face.subscribe(notify);
				notify();
				try { face.start(); } catch (e) { /* a failed load keeps the read-only view */ }
				return function () { try { if (typeof off === "function") off(); } catch (e) {} };
			}, [face]);

			if (props.view === "summary") return tr("summary");
			if (snapshot.status === "loading") {
				return react.createElement("p", { style: CONFIG_STYLE.hint }, tr("loading"));
			}
			var form = face.mutate && snapshot.writable && snapshot.revision !== undefined
				? { state: snapshot, mutate: face.mutate }
				: null;
			return react.createElement(PandoConfigForm, {
				t: props.t,
				form: form,
				values: snapshot.value,
				note: snapshot.note
			});
		}

		/** Row page: the page's own form when it supplied one, otherwise the self-resolving page. */
		function PandoRowConfig(props) {
			if (props.view === "summary") return configTranslator(props.t)("summary");
			if (props.form) return react.createElement(PandoConfigForm, { t: props.t, form: props.form });
			return react.createElement(PandoSettingsPage, { view: props.view, t: props.t });
		}

		/** True while a fiber can still own effects; without a state axis the owner is assumed live. */
		function configFiberActive(fiber) {
			try {
				if (!fiber) return false;
				var state = fiber.state;
				if (state === undefined || state === null) return true;
				return state === 2 || state === "ACTIVE" || state === "active";
			} catch (e) { return false; }
		}

		/** Register both keys once the slots service exists (it may never exist: the pet still mounts). */
		function registerConfigPages(sctx, disposers) {
			var slots = null;
			try { slots = sctx.slots; } catch (e) { slots = null; }
			if (!slots || typeof slots.inject !== "function" || typeof slots.register !== "function") return;

			// The locale seat is declared only when our dictionary really
			// registered: the renderer treats a declared namespace without a locale
			// face as a load error, and a missing dictionary would render keys.
			// Strict read: only an ACTIVE locale service has installed the slots
			// locale face this registration's `locale` option needs.
			var locale = null;
			try {
				locale = sctx.reflect && typeof sctx.reflect.get === "function"
					? sctx.reflect.get("locale")
					: null;
			} catch (e) { locale = null; }
			var useLocale = false;
			if (locale && typeof locale.register === "function") {
				try {
					var offDict = locale.register(CONFIG_DICT_NS, { en: CONFIG_TEXT.en, zh: CONFIG_TEXT.zh });
					if (typeof offDict === "function") disposers.push(offDict);
					useLocale = true;
				} catch (e) { useLocale = false; }
			}

			var rowOptions = { name: "plugins.row.config", key: CONFIG_ROW_KEY };
			var bundleOptions = { name: "plugins.bundle.config", key: CONFIG_PACKAGE };
			if (useLocale) {
				rowOptions.locale = CONFIG_DICT_NS;
				bundleOptions.locale = CONFIG_DICT_NS;
			}

			try {
				disposers.push(slots.inject("plugins.row.config", function () {
					return slots.register(rowOptions, PandoRowConfig);
				}));
			} catch (e) { /* the slot never appears: the row shows no Configure control */ }
			try {
				disposers.push(slots.inject("plugins.bundle.config", function () {
					return slots.register(bundleOptions, PandoSettingsPage);
				}));
			} catch (e) { /* the slot never appears: the bundle page shows no section */ }
		}

		/**
		 * Register the settings pages. Called before the pet's mount guard, because
		 * that guard only suppresses a second pet after a reload — it must never
		 * suppress this instance's configuration pages.
		 */
		function registerConfigSlots(ctx) {
			if (!ctx) return;
			var fiber = null;
			try { fiber = ctx.fiber || null; } catch (e) { fiber = null; }
			// One registration per live instance: registering the same key twice
			// would fight over one keyed slot. The claim is released by the
			// disposer, so a reload can register again once the old fiber is gone.
			if (configSlotsDispose && configFiberActive(configSlotsOwner)) return;

			var reactModule = null;
			try { reactModule = require("react"); } catch (e) { reactModule = null; }
			if (!reactModule || typeof reactModule.createElement !== "function") return;
			react = reactModule;

			var disposers = [];
			// The Plugins page renders a bundle's "包含的组件" (contained
			// components) section unconditionally, and this plugin's row is the
			// only one it contains — so that section just repeats the plugin's own
			// name under the configuration form. It cannot be removed through a
			// slot, but the page exposes stable data attributes, so the rows are
			// hidden on THIS package's detail page only, and only while the
			// configuration page below is registered. Other plugins are untouched.
			try {
				var pageStyle = document.createElement("style");
				pageStyle.id = "dsh-pando-page-style";
				pageStyle.textContent =
					'[data-plugin-detail="' + CONFIG_PACKAGE + '"] [data-plugin-rows]{display:none!important}';
				document.head.appendChild(pageStyle);
				disposers.push(function () {
					try { if (pageStyle.parentNode) pageStyle.parentNode.removeChild(pageStyle); } catch (e) {}
				});
			} catch (e) { /* no document (or no head): nothing to style */ }
			// Wait for `slots` instead of requiring it: a child fiber parked on a
			// service the deployment never provides leaves the pet untouched.
			try {
				disposers.push(ctx.inject(["slots"], function (sctx) {
					registerConfigPages(sctx, disposers);
				}));
			} catch (e) { /* no inject support: no settings pages */ }
			// Optional surfaces: captured when (and if) they appear.
			try {
				disposers.push(ctx.inject(["configForms"], function (c) {
					configFormsService = c.configForms;
				}));
			} catch (e) { /* no shared form service */ }
			try {
				disposers.push(ctx.inject(["remote", "remote.settings"], function (c) {
					try { configRemoteSettings = c.remote.settings; } catch (e) { configRemoteSettings = null; }
				}));
			} catch (e) { /* no remote settings namespace */ }

			var disposed = false;
			var dispose = function () {
				if (disposed) return;
				disposed = true;
				for (var i = disposers.length - 1; i >= 0; i--) {
					try { disposers[i](); } catch (e) { /* already gone */ }
				}
				disposers.length = 0;
				configFormsService = null;
				configRemoteSettings = null;
				if (configSlotsDispose === dispose) {
					configSlotsOwner = null;
					configSlotsDispose = null;
				}
			};
			configSlotsOwner = fiber;
			configSlotsDispose = dispose;
			try {
				if (typeof ctx.effect === "function") {
					ctx.effect(function () { return dispose; }, "pando: settings pages");
				}
			} catch (e) { /* the registration still lives with the injected children */ }
		}
		//#endregion

		//#region plugin body
		var STORE_KEY = "dsh.pando.state.v1";
		var LIVE_KEY = "dsh.pando.sprites.v1";
		// One-time migration from the plugin's previous name (Confirmo): carry the
		// saved pet state (position/size/selected sprite) over so a rename does not
		// reset the desktop pet. The old cache keys are simply dropped.
		function migrateLegacyStore() {
			try {
				if (localStorage.getItem(STORE_KEY)) return;
				var legacy = localStorage.getItem("dsh.confirmo.state.v1");
				if (legacy) localStorage.setItem(STORE_KEY, legacy);
			} catch (e) { /* private mode / quota: nothing to migrate */ }
		}
		// sprites discovered on disk by the node half (configured spriteDir +
		// bundled assets): these are the user's own sheets, not community ones
		var LOCAL_KEY = "dsh.pando.local.v1";

		migrateLegacyStore();
		function readStore() {
			try {
				var raw = localStorage.getItem(STORE_KEY);
				if (raw) return JSON.parse(raw);
			} catch (e) {}
			return {};
		}
		function writeStore(s) {
			try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch (e) {}
		}

		function apply(ctx) {
			// Settings pages first, and independently of the pet: the mount guard
			// below exists to avoid a second pet after a reload, and skipping this
			// call there would drop the reloaded instance's configuration pages.
			// A failure here is contained — the pet must mount regardless.
			try { registerConfigSlots(ctx); } catch (e) {}

			if (typeof document === "undefined") return;
			if (document.querySelector(".dsh-pando")) return;

			// ---- lifecycle bookkeeping -------------------------------------
			// Everything this plugin owns (timers, pet DOM, observers, the style
			// tag) must be released when its fiber is disposed: disabling the
			// plugin in the Plugin Manager, uninstalling it, or an HMR reload.
			// Without this the pet survived a disable — and because of the mount
			// guard above, the reloaded instance could never take effect either.
			var tornDown = false;
			var ownedIntervals = [], ownedTimeouts = [], ownedRafs = [];
			var _wSetInterval = window.setInterval, _wSetTimeout = window.setTimeout;
			var _wRaf = window.requestAnimationFrame, _wCancelRaf = window.cancelAnimationFrame;
			// Shadow the timer globals for everything inside apply() so no call
			// site can leak a timer; after dispose they become no-ops, which also
			// stops animation loops from re-scheduling themselves.
			function setInterval(fn, ms) {
				if (tornDown) return 0;
				var id = _wSetInterval.call(window, fn, ms);
				ownedIntervals.push(id);
				return id;
			}
			function setTimeout(fn, ms) {
				if (tornDown) return 0;
				var id = _wSetTimeout.apply(window, arguments);
				ownedTimeouts.push(id);
				return id;
			}
			function requestAnimationFrame(fn) {
				if (tornDown) return 0;
				var id = _wRaf.call(window, fn);
				ownedRafs.push(id);
				return id;
			}

			// lightweight debug handle (harmless; used to inspect state from the console)
			var debugState = { timing: [] };
			var liveSprites = null;      // live sprite list fetched this session
			var localSprites = null;     // on-disk sprites found by the node half
			window.__cfDebug = {
				timing: debugState.timing,
				get spriteId() { return state.spriteId; },
				get size() { return state.size; },
				get working() { return workingFlag; },
				get sleepy() { return sleepyFlag; },
				get row() { return player.row; },
				sleepNow: function () { lastActivity = 0; },   // force the idle->sleepy path (debug aid)
				cacheInfo: function () {                        // processed-sheet cache diagnostics
					return openDb().then(function (db) {
						return new Promise(function (resolve, reject) {
							var tx = db.transaction(IDB_STORE, "readonly");
							var all = tx.objectStore(IDB_STORE).getAll();
							all.onsuccess = function () {
								resolve((all.result || []).map(function (r) {
									var level = (r.id && r.id.indexOf("#") > 0) ? r.id.slice(r.id.indexOf("#") + 1) : "legacy";
									return { id: r.id, level: level, size: r.blob ? r.blob.size : 0, ts: r.ts };
								}));
							};
							all.onerror = function () { reject(all.error); };
						});
					}).catch(function () { return []; });
				}
			};

			var style = document.createElement("style");
			style.id = "dsh-pando-style";   // removed again on dispose
			style.textContent = CSS;
			document.head.appendChild(style);

			var stored = readStore();
			var defSize = stored.size || 128;
			var state = {
				spriteId: stored.spriteId || null,
				x: typeof stored.x === "number" ? stored.x : 24,
				// default: bottom-left corner (restore keeps the user's last position)
				y: typeof stored.y === "number" ? stored.y : Math.max(2, window.innerHeight - defSize - 16),
				size: defSize
			};
			// One-time default migration: when the shipped default sprite changes,
			// switch to it once for existing installs (their saved spriteId would
			// otherwise win). After that the user's own menu choice is respected
			// again, because defaultV is already current.
			var DEFAULT_SPRITE_VERSION = 3;   // bump when the bundled default changes
			if (stored.defaultV !== DEFAULT_SPRITE_VERSION) {
				state.spriteId = QPANDA_SPRITE.id;
				state.defaultV = DEFAULT_SPRITE_VERSION;
				writeStore(state);
			}

			var root = document.createElement("div");
			root.className = "dsh-pando";
			root.setAttribute("aria-hidden", "true");
			root.title = "Pando 桌宠 — 拖动移动,右键换形象,单击互动";
			document.body.appendChild(root);

			var pet = document.createElement("div");
			pet.className = "cf-pet";
			root.appendChild(pet);

			var sprite = null;        // currently loaded sprite data
			var spriteMeta = null;    // the sprite list entry in use
			var player = { raf: 0, frames: null, row: 0, idx: 0, fps: 8, last: 0, once: false, loops: 0, playing: false };
			var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

			// ---- state machine: every sprite row is a state ----
			// Rows (per sprites.confirmo.love spec): 0 idle, 1 happy, 2 excited,
			// 3 sleepy, 4 working, 5 angry, 6 dragging.
			var workingFlag = false;         // agent is running (DOM-detected)
			var sleepyFlag = false;          // no agent action / pet interaction for a while
			var lastActivity = Date.now();   // last agent action or pet interaction
			var SLEEPY_AFTER = 300000;       // 5 min without agent action or pet interaction -> sleepy
			var WORK_CHECK_MS = 1000;
			var IDLE_CHECK_MS = 1000;

			// ---- sleeping "Z" decoration: 3 Z's appear in sequence (staggered by
			// 1.2s) so up to three are visible at once, each drifting in from the
			// right-middle, pausing at 2/3, then growing and fading toward the
			// upper-right
			var sleepZEl = null;
			function showSleepZ() {
				if (sleepZEl || !root.parentNode) return;
				var wrap = document.createElement("div");
				wrap.className = "cf-sleep-zs";
				var count = reduced ? 1 : 3;
				for (var i = 0; i < count; i++) {
					var z = document.createElement("div");
					z.className = "cf-sleep-z";
					z.textContent = "Z";
					if (i > 0) z.style.animationDelay = (i * 1.5) + "s";   // 4.5s cycle / 3
					wrap.appendChild(z);
				}
				root.appendChild(wrap);
				sleepZEl = wrap;
			}
			function hideSleepZ() {
				if (sleepZEl) {
					if (sleepZEl.parentNode) sleepZEl.parentNode.removeChild(sleepZEl);
					sleepZEl = null;
				}
			}

			/** Agent action or pet interaction: resets the sleep timer and wakes the pet. */
			function noteActivity() {
				lastActivity = Date.now();
				if (sleepyFlag) {
					sleepyFlag = false;
					hideSleepZ();
					playBase();
				}
			}

			function isAgentWorking() {
				// Primary signal: DSH mounts the running indicator with
				// `data-chat-running` on it only while the session is running
				// (lib/types/client/chat/RunningStatus.js) — purpose-built and
				// removed as soon as the turn ends.
				//
				// Do NOT test `[role="status"][aria-live="polite"]`: DSH also uses
				// that pattern for the per-turn screen-reader announcements
				// ("worked"/"stopped"/"failed") that stay in the transcript after a
				// turn closes, which pinned the pet to Working forever.
				try {
					if (document.querySelector("[data-chat-running]")) return true;
					// secondary: streaming assistant markdown / reasoning text
					// (covers the brief gaps between tool calls of a running turn)
					return !!document.querySelector("[data-streaming]");
				} catch (e) { return false; }
			}

			/** The continuous base row given current flags (working > sleepy > idle). */
			function effectiveBase() {
				if (workingFlag) return ROW_WORKING;
				if (sleepyFlag) return ROW_SLEEPY;
				return ROW_IDLE;
			}

			function playBase() {
				if (dragging) return;
				playRow(effectiveBase(), false);
			}

			/** One-shot reaction: play 2 loops, then return to the current base. */
			function playOneShot(row, onDone) {
				if (dragging) return;
				playRow(row, true, onDone);
			}

			// floating "working" decorations: a fixed metallic gear (spinning in
			// place) plus 6-10 random pastel "macaron" symbols that burst outward
			// and dissolve, like the original app
			var MACARON = ["#ef7d9e", "#f48fb1", "#5aa9e6", "#9b7fd4", "#f2c64d", "#5fc4a3", "#ffa76e", "#9fd05e", "#ff8a80", "#b98ae0", "#4db6e2", "#f28cb8"];
			var SYM_GLYPHS = ["{ }", "[ ]", "( )", "< >", "</>", "#", "&&", "||", "=>", "~", "+", "=", "!", "?"];
			var workSymsEl = null;
			var workGearEl = null;
			var workDotsEl = null;
			function showWorkSymbols() {
				if (workSymsEl || !root.parentNode) return;
				// system gear glyph (⚙, text presentation so the silver color applies),
				// anchored to the pet's top-left corner, spins in place
				if (!workGearEl) {
					var gear = document.createElement("span");
					gear.className = "cf-gear";
					gear.innerHTML = '<span class="cf-sym-spin">&#9881;&#65038;</span>';
					root.appendChild(gear);
					workGearEl = gear;
				}
				// three loading dots on the right, bobbing up and down
				if (!workDotsEl) {
					var dots = document.createElement("span");
					dots.className = "cf-loading-dots";
					dots.innerHTML = '<span class="cf-dot"></span><span class="cf-dot"></span><span class="cf-dot"></span>';
					root.appendChild(dots);
					workDotsEl = dots;
				}

				var wrap = document.createElement("div");
				wrap.className = "cf-work-symbols";

				// 5-8 random pastel code symbols, spread loosely: one per horizontal
				// band (staggered heights), each with its own sway and timing.
				// Glyphs and colors are sampled WITHOUT replacement so every batch
				// looks as different as possible.
				var n = 5 + Math.floor(Math.random() * 4);   // 5-8 symbols
				function pickDistinct(arr, k) {
					var a = arr.slice();
					for (var x = a.length - 1; x > 0; x--) {
						var y = Math.floor(Math.random() * (x + 1));
						var t = a[x]; a[x] = a[y]; a[y] = t;
					}
					return a.slice(0, k);
				}
				var glyphs = pickDistinct(SYM_GLYPHS, n);
				var colors = pickDistinct(MACARON, n);
				var areaW = Math.max(60, root.offsetWidth + 60);
				var areaH = Math.max(60, root.offsetHeight + 40);
				var petW = root.offsetWidth;
				var bandW = Math.max(10, petW - 24) / n;
				// shuffled band order so symbols are not left-to-right in step
				var order = [];
				for (var bi = 0; bi < n; bi++) order.push(bi);
				for (var bi2 = n - 1; bi2 > 0; bi2--) {
					var j = Math.floor(Math.random() * (bi2 + 1));
					var tmp = order[bi2]; order[bi2] = order[j]; order[j] = tmp;
				}
				for (var i = 0; i < n; i++) {
					var s = document.createElement("span");
					s.className = "cf-sym";
					var g = glyphs[i];
					var inner = document.createElement("span");
					inner.className = "cf-sym-code";   // all programming symbols, monospace
					inner.textContent = g;
					s.appendChild(inner);
					var durSec = 3.9 + Math.random() * 3.0;                 // 3.9-6.9s rise (was 2.6-4.6: 1/3 slower)
					var dur = durSec.toFixed(2) + "s";
					var delay = (Math.random() * 3.2).toFixed(2) + "s";    // 0-3.2s
					var swayDur = Math.max(1.0, durSec / 2).toFixed(2) + "s";  // ~half the rise: quicker sway
					// stratified x: each symbol in its own band; spawn ABOVE the pet's
					// top edge across a WIDER vertical band, with random z so overlaps
					// layer instead of colliding
					s.style.left = Math.round(40 + order[i] * bandW + Math.random() * bandW) + "px";
					s.style.top = Math.round(-(8 + Math.random() * 46)) + "px";
					s.style.fontSize = "15px";   // uniform size
					s.style.color = colors[i];
					s.style.zIndex = 1 + Math.floor(Math.random() * 4);
					// rise upward (slight drift) while the inner glyph sways side to side
					s.style.setProperty("--sx", Math.round((Math.random() * 2 - 1) * 8) + "px");
					s.style.setProperty("--sy", Math.round(-(24 + Math.random() * 40)) + "px");
					s.style.animationDelay = delay;
					s.style.animationDuration = dur;
					// smaller sway so neighbours don't sweep into each other
					inner.style.setProperty("--dx1", Math.round(7 + Math.random() * 9) + "px");
					inner.style.setProperty("--dx2", Math.round(-(7 + Math.random() * 9)) + "px");
					if (!reduced) {
						inner.style.animation = "cf-sym-sway " + swayDur + " ease-in-out infinite";   // swayDur already has "s"
						inner.style.animationDelay = delay;
					}
					wrap.appendChild(s);
				}

				root.appendChild(wrap);
				workSymsEl = wrap;
			}
			function hideWorkSymbols() {
				if (workSymsEl) {
					if (workSymsEl.parentNode) workSymsEl.parentNode.removeChild(workSymsEl);
					workSymsEl = null;
				}
				if (workGearEl) {
					if (workGearEl.parentNode) workGearEl.parentNode.removeChild(workGearEl);
					workGearEl = null;
				}
				if (workDotsEl) {
					if (workDotsEl.parentNode) workDotsEl.parentNode.removeChild(workDotsEl);
					workDotsEl = null;
				}
			}

			// ---- task completion celebration ----
			var workStartedAt = 0;
			var bubbleEl = null;
			function celebrateComplete() {
				if (Date.now() - workStartedAt < 2000) return;        // too short -> just a flicker
				if (Date.now() - lastAngryAt < 3000) return;         // just errored -> don't celebrate
				// like the original app: first EXCITED (with a near-far zoom), then HAPPY
				if (sprite) {
					playOneShot(ROW_EXCITED, function () {
						root.classList.remove("zoom");   // zoom only during the excited phase
						playOneShot(ROW_HAPPY);
					});
				}
				// near-far zoom: pet lunges toward the viewer, then back (2 cycles ~ 2s)
				root.classList.remove("zoom");
				void root.offsetWidth;
				root.classList.add("zoom");
				clearTimeout(popTimer);
				popTimer = setTimeout(function () { root.classList.remove("zoom"); }, 2100);
				// speech bubble
				if (bubbleEl && bubbleEl.parentNode) bubbleEl.parentNode.removeChild(bubbleEl);
				var b = document.createElement("div");
				b.className = "cf-bubble";
				b.textContent = "\u641e\u5b9a! \u2713";
				root.appendChild(b);
				bubbleEl = b;
				setTimeout(function () { if (bubbleEl && bubbleEl.parentNode) bubbleEl.parentNode.removeChild(bubbleEl); if (bubbleEl === b) bubbleEl = null; }, 4600);
			}

			// ---- unified state preview (menu buttons): every preview lasts 10s,
			// then returns to the current base state; any pet interaction or a real
			// agent-state change interrupts it (clearing preview decorations)
			var previewTimer = null;
			var previewActive = false;
			function clearPreviewTimer() { clearTimeout(previewTimer); previewTimer = null; }
			function cancelPreview() { clearPreviewTimer(); previewActive = false; }
			/** Pet interaction during a preview: drop the preview and its effects. */
			function interruptPreview() {
				if (!previewActive) return;
				cancelPreview();
				hideWorkSymbols();
				hideSleepZ();
				sleepyFlag = false;
			}
			function startPreview(row, opts) {
				opts = opts || {};
				cancelPreview();
				previewActive = true;
				if (opts.symbols) showWorkSymbols(); else hideWorkSymbols();
				if (opts.sleepZ) { sleepyFlag = true; showSleepZ(); }
				else if (sleepyFlag) { sleepyFlag = false; hideSleepZ(); }
				playRow(row, false);   // continuous while previewing
				previewTimer = setTimeout(function () {
					previewTimer = null;
					previewActive = false;
					if (opts.sleepZ) { sleepyFlag = false; hideSleepZ(); }
					hideWorkSymbols();
					playBase();
				}, 10000);
			}

			function setWorking(w) {
				if (w === workingFlag) return;
				cancelPreview();
				var ended = workingFlag && !w;
				workingFlag = w;
				if (w) {
					workStartedAt = Date.now();
					// While the pet is being dragged the drag pose wins, so the
					// decorations must not pop up mid-drag: endDrag() shows them once
					// the pointer is released and the pet is still working.
					if (!dragging) showWorkSymbols();
					playBase();
				} else {
					hideWorkSymbols();
					if (ended) celebrateComplete();   // agent finished -> happy + pop + bubble
					else playBase();
				}
			}

			// ambient watchers: agent-running detection + agent-idle -> sleepy timeout
			var workTimer = setInterval(function () {
				try {
					var busy = isAgentWorking();
					if (busy) noteActivity();   // agent action resets the sleep timer + wakes the pet
					setWorking(busy);
				} catch (e) {}
			}, WORK_CHECK_MS);
			var idleTimer = setInterval(function () {
				if (workingFlag) return;
				if (previewActive) return;   // a menu preview is running: don't auto-sleep
				if (!sleepyFlag && Date.now() - lastActivity > SLEEPY_AFTER) {
					sleepyFlag = true;
					showSleepZ();
					playBase();
					prefetchIdle();   // no agent work / no pet interaction -> prefetch in the background
				}
			}, IDLE_CHECK_MS);

			// agent-error detection: the conversation UI marks failed tool / command
			// cards with [data-error]; a MutationObserver catches NEW ones (history
			// errors stay in the DOM, so polling would always see "old" errors)
			var errorObserver = null;
			var lastAngryAt = 0;
			function startErrorWatch() {
				if (errorObserver || typeof MutationObserver === "undefined") return;
				errorObserver = new MutationObserver(function (muts) {
					var found = false;
					for (var i = 0; i < muts.length && !found; i++) {
						var added = muts[i].addedNodes;
						for (var j = 0; j < added.length && !found; j++) {
							var n = added[j];
							if (n.nodeType === 1 && (n.matches && (n.matches("[data-error]") || n.querySelector("[data-error]")))) found = true;
						}
					}
					if (found) {
						var now = Date.now();
						if (now - lastAngryAt > 5000 && sprite) {
							lastAngryAt = now;
							playOneShot(ROW_ANGRY);
						}
					}
				});
				try { errorObserver.observe(document.body, { childList: true, subtree: true }); } catch (e) {}
			}
			startErrorWatch();

			function applySize() {
				var s = state.size;
				if (sprite) {
					var w = Math.round(s * sprite.aspect);
					root.style.width = w + "px";
					root.style.height = s + "px";
				} else {
					root.style.width = s + "px";
					root.style.height = s + "px";
				}
			}

			function place() {
				root.style.left = Math.max(0, Math.min(window.innerWidth - 40, state.x)) + "px";
				root.style.top = Math.max(0, Math.min(window.innerHeight - 40, state.y)) + "px";
			}

			function stopLoop() {
				if (player.raf) cancelAnimationFrame(player.raf);
				player.raf = 0;
				player.playing = false;
			}

			function tick(now) {
				if (!player.frames || !player.frames.length) return;
				var row = player.frames[player.row];
				if (!row || !row.length) return;
				if (now - player.last >= 1000 / player.fps) {
					player.last = now;
					player.idx = (player.idx + 1) % row.length;
					if (player.idx === 0) {
						player.loops++;
						if (player.once && player.loops >= 2) {
							stopLoop();
							if (player.onDone) {
								var cb = player.onDone;
								player.onDone = null;
								cb();
							} else {
								playBase();
							}
							return;
						}
					}
					drawFrame(row[player.idx]);
				}
				player.raf = requestAnimationFrame(tick);
			}

			function playRow(row, once, onDone) {
				if (!sprite || !sprite.frames[row]) return;
				stopLoop();
				player.frames = sprite.frames;
				player.row = row;
				player.idx = 0;
				player.once = !!once;
				player.onDone = onDone || null;
				player.loops = 0;
				player.last = 0;
				player.playing = true;
				if (reduced) { drawFrame(sprite.frames[row][0]); return; }
				drawFrame(sprite.frames[row][0]);
				player.raf = requestAnimationFrame(tick);
			}

			var canvas = null;
			function drawFrame(fc) {
				if (!canvas) return;
				var g = canvas.getContext("2d");
				g.clearRect(0, 0, canvas.width, canvas.height);
				g.drawImage(fc, 0, 0, canvas.width, canvas.height);
			}

			function showCat() {
				stopLoop();
				sprite = null; spriteMeta = null;
				pet.innerHTML = "";
				var wrap = document.createElement("div");
				wrap.innerHTML = CAT_SVG;
				pet.appendChild(wrap.firstElementChild);
				applySize();
			}

			function showLoading() {
				var l = document.createElement("div");
				l.className = "cf-loading";
				l.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;"><div class="cf-spinner"></div><span>加载中…</span></div>';
				pet.appendChild(l);
				return l;
			}

			function showSprite(meta) {
				var loading = showLoading();
				var t0 = performance.now();
				loadSpriteSheet(meta).then(function (data) {
					if (window.__cfDebug) window.__cfDebug.timing.push({ step: "loaded", ms: Math.round(performance.now() - t0) });
					if (loading.parentNode) loading.parentNode.removeChild(loading);
					sprite = data; spriteMeta = meta;
					pet.innerHTML = "";
					canvas = document.createElement("canvas");
					canvas.className = "cf-canvas";
					canvas.width = Math.round(data.sheetW / COLS);
					canvas.height = Math.round(data.sheetH / ROWS);
					pet.appendChild(canvas);
					applySize();
					playBase();
				}).catch(function (err) {
					if (window.__cfDebug) window.__cfDebug.lastError = String((err && err.message) || err);
					if (loading.parentNode) loading.parentNode.removeChild(loading);
					if (sprite) {
						// keep the current sprite on screen; flash angry
						state.spriteId = spriteMeta ? spriteMeta.id : null;
						writeStore(state);
						playOneShot(ROW_ANGRY);
					} else {
						state.spriteId = null;
						writeStore(state);
						showCat();
					}
					var t = document.createElement("div");
					t.className = "cf-loading";
					t.textContent = "加载失败,已保持当前形象";
					pet.appendChild(t);
					setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 1800);
				});
			}

			function selectSprite(meta) {
				state.spriteId = meta ? meta.id : null;
				writeStore(state);
				if (!meta) { showCat(); return; }
				showSprite(meta);
			}

			// ---- initial render ----
			place();
			applySize();
			var initial = null;
			if (state.spriteId) {
				var restoreList = getSpriteList();
				for (var i = 0; i < restoreList.length; i++) if (restoreList[i].id === state.spriteId) initial = restoreList[i];
			}
			if (initial) showSprite(initial);
			else if (QPANDA_SPRITE) showSprite(QPANDA_SPRITE);   // built-in default sprite
			else showCat();

			// warm the live + on-disk sprite lists in the background (the menu
			// rebuilds when they arrive), then prefetch sheets into the node cache
			refreshLive().then(function () {
				setTimeout(prefetchIdle, 4000);
			});
			/** Re-resolve the selected sprite against the current lists. */
			function reResolveCurrentSprite() {
				// a saved sprite may only exist on disk: re-resolve it once the
				// discovery payload has arrived (e.g. a custom spriteDir sprite)
				if (!state.spriteId || (sprite && sprite.id === state.spriteId)) return;
				var list = getSpriteList();
				for (var i = 0; i < list.length; i++) {
					if (list[i].id === state.spriteId) { showSprite(list[i]); return; }
				}
				// the selection came from the previous spriteDir and is gone now:
				// fall back to the default instead of showing a broken sheet
				showSprite(QPANDA_SPRITE);
				state.spriteId = QPANDA_SPRITE.id;
				writeStore(state);
			}
			refreshLocal().then(reResolveCurrentSprite);

			// The settings form calls this after a successful save: the node half
			// resolves spriteDir per request, so re-reading the lists makes the new
			// directory live immediately — no restart and no page reload.
			var refreshSpriteSources = function () {
				return refreshLive().then(function () { return refreshLocal(); }).then(reResolveCurrentSprite);
			};
			pandoRefreshSprites = refreshSpriteSources;

			// ---- drag ----
			var dragging = false, moved = false, dragRowOn = false;
			var startX = 0, startY = 0, startTop = 0, startLeft = 0;
			root.addEventListener("pointerdown", function (e) {
				if (e.button !== 0 && e.pointerType === "mouse") return;
				interruptPreview();   // interacting drops any running preview (e.g. working decorations)
				noteActivity();   // pet interaction: wakes from sleep, resets the 5-min timer
				dragging = true; moved = false; dragRowOn = false;
				startX = e.clientX; startY = e.clientY;
				var rect = root.getBoundingClientRect();
				startTop = rect.top; startLeft = rect.left;
				root.classList.add("dragging");
				try { root.setPointerCapture(e.pointerId); } catch (_) {}
				e.preventDefault();
				// the drag row starts only when the pointer actually moves —
				// a plain click must not flash the dragging animation
			});
			root.addEventListener("pointermove", function (e) {
				if (!dragging) return;
				var dx = e.clientX - startX, dy = e.clientY - startY;
				if (Math.abs(dx) + Math.abs(dy) > 5) {
					if (!moved) {
						moved = true;
						// A real drag begins. The working decorations (gear, loading
						// dots, floating symbols) belong to the working pose, so drop
						// them until the pointer is released. This is deliberately not
						// tied to `sprite`: the decorations are also shown over the
						// fallback cat, so a failed sheet load must not leave them
						// hanging on the dragging pet either.
						hideWorkSymbols();
					}
					if (sprite && !dragRowOn) { dragRowOn = true; playRow(ROW_DRAG, false); }
				}
				var maxY = window.innerHeight - root.offsetHeight - 6;
				var maxX = window.innerWidth - root.offsetWidth - 6;
				state.y = Math.max(2, Math.min(maxY, startTop + dy));
				state.x = Math.max(2, Math.min(maxX, startLeft + dx));
				place();
			});
			function endDrag() {
				if (!dragging) return;
				dragging = false;
				root.classList.remove("dragging");
				if (moved) {
					writeStore(state);
					playBase();
				}
				// Back on the base pose: the working decorations return. The guard on
				// workSymsEl covers both paths — hidden for the drag, and deferred
				// because the agent started working while the pointer was down (a
				// plain click that never moved must not lose them either).
				if (workingFlag && !workSymsEl) showWorkSymbols();
			}
			root.addEventListener("pointerup", endDrag);
			root.addEventListener("pointercancel", endDrag);

			// ---- click gesture (debounced commit) ----
			// Best practice: one quiet-window timer disambiguates 单击/双击/连点.
			// Each click resets the timer; when no new click arrives for QUIET_MS
			// the accumulated count commits: 1 → 开心, 2 → 兴奋(+pop), 5+ → 生气.
			var gestureTimer = null;
			var popTimer = null;
			var clickCount = 0;
			var QUIET_MS = 250;   // quiet window (100ms is shorter than a normal
			                     // double-click gap of ~150-400ms, so 250 is safer)
			function petBounce() {
				var svg = pet.querySelector(".cf-cat");
				if (svg) {
					svg.classList.remove("bounce");
					void svg.offsetWidth;
					svg.classList.add("bounce");
				}
			}
			function commitGesture(n) {
				// while the excited animation is playing, only the angry escalation reacts
				if (sprite && player.once && player.row === ROW_EXCITED && n < 5) return;
				if (n >= 5) { if (sprite) playOneShot(ROW_ANGRY); else petBounce(); return; }   // 连点 5 次 → 生气
				if (n === 2) {
					// 双击 → 兴奋 + whole-pet bounce
					root.classList.remove("pop");
					void root.offsetWidth;
					root.classList.add("pop");
					clearTimeout(popTimer);
					popTimer = setTimeout(function () { root.classList.remove("pop"); }, 1700);
					if (sprite) playOneShot(ROW_EXCITED); else petBounce();
					return;
				}
				if (sprite) playOneShot(ROW_HAPPY); else petBounce();   // 单击 → 开心
			}
			root.addEventListener("click", function (e) {
				if (moved) return;
				interruptPreview();   // interacting drops any running preview
				noteActivity();   // pet interaction
				// no reaction while the agent is working
				if (workingFlag) return;
				clickCount++;
				clearTimeout(gestureTimer);
				if (clickCount >= 5) {
					// angry fires immediately; reset the gesture state
					clickCount = 0;
					if (sprite) playOneShot(ROW_ANGRY); else petBounce();
					return;
				}
				// commit the gesture once the user pauses
				gestureTimer = setTimeout(function () {
					gestureTimer = null;
					var n = clickCount;
					clickCount = 0;
					commitGesture(n);
				}, QUIET_MS);
			});

			// ---- live sprite list (via the node-half proxy route /pando/sprites) ----
			// (liveSprites declared at the top of apply with the other state)
			function getSpriteList() {
				var base = [];
				if (liveSprites && liveSprites.length) base = liveSprites;
				else {
					try {
						var raw = localStorage.getItem(LIVE_KEY);
						if (raw) {
							var parsed = JSON.parse(raw);
							if (Array.isArray(parsed) && parsed.length) base = parsed;
						}
					} catch (e) {}
					if (!base.length) base = SPRITE_LIST;
				}
				// on-disk sprites (the configured spriteDir, then bundled assets)
				var locals = localSprites;
				if (!locals) {
					try {
						var lraw = localStorage.getItem(LOCAL_KEY);
						if (lraw) {
							var lparsed = JSON.parse(lraw);
							if (Array.isArray(lparsed)) locals = lparsed;
						}
					} catch (e) {}
				}
				locals = locals || [];
				// Built-in first (QPanda is the default), then the user's own
				// sprites, then the community list. Ids are deduped so a local
				// sprite can shadow a community entry with the same id.
				var out = [QPANDA_SPRITE];
				var seen = {};
				seen[QPANDA_SPRITE.id] = 1;
				for (var li = 0; li < locals.length; li++) {
					var ls = locals[li];
					if (!ls || !ls.id || seen[ls.id]) continue;
					seen[ls.id] = 1;
					out.push(ls);
				}
				for (var bi = 0; bi < base.length; bi++) {
					var bs = base[bi];
					if (!bs || !bs.id || seen[bs.id]) continue;
					seen[bs.id] = 1;
					// Community entries always carry the shared-gallery badge, even
					// when they come from the embedded snapshot (offline fallback) or
					// from a localStorage cache written before origins existed.
					out.push(bs.origin ? bs : { id: bs.id, name: bs.name, spriteUrl: bs.spriteUrl, thumbnailUrl: bs.thumbnailUrl, processedThumbnailUrl: bs.processedThumbnailUrl, frameWidth: bs.frameWidth, frameHeight: bs.frameHeight, frameCount: bs.frameCount, origin: "official" });
				}
				return out;
			}
			/** Map the node half's discovery payload onto the sprite shape the UI uses. */
			function normalizeLocalSprites(raw) {
				var out = [];
				for (var i = 0; i < (raw || []).length; i++) {
					var s = raw[i];
					if (!s || !s.id || !s.sheetUrl) continue;
					out.push({
						id: String(s.id),
						name: String(s.name || s.id),
						// the node half reports where the sheet came from: a sheet in
						// the configured spriteDir is "local", the package's own
						// assets/ is "builtin"
						origin: s.source === "user" ? "local" : "builtin",
						spriteUrl: s.sheetUrl,
						// no thumb.png on disk -> let the menu grid-crop frame 1
						thumbnailUrl: s.thumbUrl || s.sheetUrl,
						processedThumbnailUrl: s.thumbUrl || "",
						frameWidth: Number(s.frameWidth) || 256,
						frameHeight: Number(s.frameHeight) || 256,
						frameCount: Number(s.frameCount) || 56,
						cacheVersion: s.version || "",
						local: true,
						preprocessed: s.preprocessed !== false
					});
				}
				return out;
			}
			/** Fetch the on-disk sprite list; resolve to the current list either way. */
			function refreshLocal() {
				return fetch("/pando/local-sprites", {
					signal: AbortSignal.timeout(8000)
				}).then(function (r) {
					if (!r.ok) throw new Error("local-sprites " + r.status);
					return r.json();
				}).then(function (d) {
					var list = normalizeLocalSprites(Array.isArray(d) ? d : (d && d.sprites) || []);
					localSprites = list;
					try { localStorage.setItem(LOCAL_KEY, JSON.stringify(list)); } catch (e) {}
					return list;
				}).catch(function () {
					return localSprites || [];
				});
			}
			function normalizeSpriteList(raw) {
				var out = [];
				for (var i = 0; i < raw.length; i++) {
					var s = raw[i];
					if (!s || !s.id || !s.spriteUrl) continue;
					out.push({
						id: s.id,
						name: s.name || "",
						spriteUrl: s.spriteUrl,
						thumbnailUrl: s.thumbnailUrl || "",
						processedThumbnailUrl: s.processedThumbnailUrl || "",
						frameWidth: s.frameWidth,
						frameHeight: s.frameHeight,
						frameCount: s.frameCount,
						origin: "official"
					});
				}
				return out;
			}
			/** Fetch the live list through the same-origin proxy; resolve to a usable list either way. */
			function refreshLive() {
				return fetch("/pando/sprites?page=1&limit=40&sort=trending", {
					signal: AbortSignal.timeout(8000)
				}).then(function (r) {
					if (!r.ok) throw new Error("proxy " + r.status);
					return r.json();
				}).then(function (d) {
					var list = normalizeSpriteList((d && d.sprites) || []);
					if (!list.length) throw new Error("empty list");
					liveSprites = list;
					try { localStorage.setItem(LIVE_KEY, JSON.stringify(list)); } catch (e) {}
					return list;
				}).catch(function () {
					return getSpriteList();
				});
			}

			// ---- idle prefetch: fill the node disk cache (L3) while the user is away ----
			var PREFETCH_KEY = "dsh.pando.prefetch.v1";
			var prefetchBusy = false;
			function prefetchIdle() {
				if (prefetchBusy) return;
				prefetchBusy = true;
				var done = {};
				try { done = JSON.parse(localStorage.getItem(PREFETCH_KEY) || "{}"); } catch (e) {}
				var list = getSpriteList();
				var budget = 15;   // cap per run
				var idx = 0;
				function step() {
					while (idx < list.length && (done[list[idx].id] || !list[idx].spriteUrl)) idx++;
					if (idx >= list.length || budget <= 0 || document.hidden || navigator.onLine === false) {
						prefetchBusy = false;
						try { localStorage.setItem(PREFETCH_KEY, JSON.stringify(done)); } catch (e) {}
						return;
					}
					var s = list[idx++];
					done[s.id] = 1;
					budget--;
					// built-in local sprites need no disk caching
					if (s.local) { setTimeout(step, 2500); return; }
					// request through the node route so the raw sheet lands on disk;
					// consume the body to release the connection
					fetch("/pando/sprite/" + encodeURIComponent(s.id) + "?url=" + encodeURIComponent(s.spriteUrl), {
						signal: AbortSignal.timeout(30000)
					}).then(function (r) {
						return r.arrayBuffer();
					}).catch(function () {}).then(function () {
						setTimeout(step, 2500);   // space requests, don't hog bandwidth
					});
				}
				step();
			}

			// ---- context menu ----
			var openMenu = null;
			var menuKeyHandler = null;
			function buildMenu() {
				// close any previously open menu first (no stacking)
				document.querySelectorAll(".cf-menu-backdrop, .cf-menu").forEach(function (el) {
					if (el.parentNode) el.parentNode.removeChild(el);
				});
				openMenu = null;
				if (menuKeyHandler) {
					document.removeEventListener("keydown", menuKeyHandler);
					menuKeyHandler = null;
				}
				// DSH themes via CSS tokens; use color-scheme to pick the menu skin
				var menuDark = false;
				try {
					var scheme = getComputedStyle(document.documentElement).colorScheme || "";
					menuDark = scheme === "dark" || (scheme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
				} catch (e) {
					menuDark = !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
				}
				if (menuDark) document.body.classList.add("cf-dark");

				var backdrop = document.createElement("div");
				backdrop.className = "cf-menu-backdrop";
				document.body.appendChild(backdrop);

				var menu = document.createElement("div");
				menu.className = "cf-menu";
				document.body.appendChild(menu);

				var head = document.createElement("div");
				head.className = "cf-menu-head";
				head.innerHTML =
					'<span class="cf-menu-title">Pando 桌宠</span>' +
					'<span class="cf-menu-cur"></span>' +
					'<div class="cf-menu-sizes">' +
					'<button data-size="96">小</button><button data-size="128">中</button><button data-size="160">大</button>' +
					'</div>';
				menu.appendChild(head);

				// state buttons: manually play any of the 7 sprite rows
				var states = document.createElement("div");
				states.className = "cf-menu-states";
				states.innerHTML =
					'<button data-state="idle">待机</button>' +
					'<button data-state="happy">开心</button>' +
					'<button data-state="excited">兴奋</button>' +
					'<button data-state="sleepy">睡觉</button>' +
					'<button data-state="working">工作</button>' +
					'<button data-state="angry">生气</button>' +
					'<button data-state="drag">拖拽</button>';
				menu.appendChild(states);
				var stateBtns = states.querySelectorAll("button");
				for (var si = 0; si < stateBtns.length; si++) {
					(function (b) {
						b.addEventListener("click", function () {
							var st = b.dataset.state;
							noteActivity();   // menu interaction counts as activity: no instant re-sleep
							if (st === "idle") {
								clearPreviewTimer();
								sleepyFlag = false; hideSleepZ();
								workingFlag = false;
								hideWorkSymbols();
								playBase();
								return;
							}
							// unified 15s preview for every other state
							if (st === "sleepy") startPreview(ROW_SLEEPY, { sleepZ: true });
							else if (st === "working") startPreview(ROW_WORKING, { symbols: true });
							else if (st === "happy") startPreview(ROW_HAPPY);
							else if (st === "angry") startPreview(ROW_ANGRY);
							else if (st === "drag") startPreview(ROW_DRAG);
							else if (st === "excited") {
								// same look as a real double-click: bounce + excited row
								startPreview(ROW_EXCITED);
								root.classList.remove("pop");
								void root.offsetWidth;
								root.classList.add("pop");
								clearTimeout(popTimer);
								popTimer = setTimeout(function () { root.classList.remove("pop"); }, 1700);
							}
						});
					})(stateBtns[si]);
				}

				var grid = document.createElement("div");
				grid.className = "cf-menu-grid";
				menu.appendChild(grid);

				var cur = head.querySelector(".cf-menu-cur");
				var sizeBtns = head.querySelectorAll(".cf-menu-sizes button");
				function refreshHead() {
					cur.textContent = spriteMeta ? spriteMeta.name : (QPANDA_SPRITE ? QPANDA_SPRITE.name : "默认猫咪");
					for (var i = 0; i < sizeBtns.length; i++) {
						var b = sizeBtns[i];
						b.classList.toggle("on", Number(b.dataset.size) === state.size);
					}
				}

				function findSprite(id) {
					var list = getSpriteList();
					for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
					return null;
				}

				/**
				 * Fallback thumbnail: show the grid sheet's top-left cell.
				 * Renders the raw CSS crop instantly (magenta visible), then
				 * chroma-keys the full thumbnail in a canvas and swaps in the
				 * cleaned first-frame cell (transparent background), so every
				 * menu thumb ends up on the checkerboard like the processed ones.
				 */
				function gridCropThumb(thumb, url) {
					thumb.classList.add("cf-thumb-grid");
					thumb.style.backgroundImage = 'url("' + url.replace(/"/g, "%22") + '")';
					var img = new Image();
					img.crossOrigin = "anonymous";
					img.onload = function () {
						try {
							var w = img.naturalWidth, h = img.naturalHeight;
							if (!w || !h) return;
							var full = document.createElement("canvas");
							full.width = w; full.height = h;
							var g = full.getContext("2d");
							g.drawImage(img, 0, 0);
							chromaKey(full, w, h);
							var cw = Math.max(1, Math.round(w / COLS)), ch = Math.max(1, Math.round(h / ROWS));
							var cell = document.createElement("canvas");
							cell.width = cw; cell.height = ch;
							var cg = cell.getContext("2d");
							cg.imageSmoothingEnabled = false;
							cg.drawImage(full, 0, 0, cw, ch, 0, 0, cw, ch);
							thumb.classList.remove("cf-thumb-grid");
							thumb.style.backgroundImage = "none";
							var out = document.createElement("img");
							out.src = cell.toDataURL("image/png");
							out.alt = "";
							thumb.appendChild(out);
						} catch (e) { /* keep the raw grid crop */ }
					};
					img.src = url;
				}

				var ORIGIN_LABEL = { builtin: "内置", local: "本地", official: "共享" };
				function makeItem(id, label, thumbUrl, processedThumbUrl, origin) {
					var item = document.createElement("div");
					item.className = "cf-item" + (id === state.spriteId ? " on" : "");
					item.dataset.id = id || "";
					var thumb = document.createElement("div");
					thumb.className = "cf-thumb";
					if (processedThumbUrl) {
						// clean single-character preview (transparent bg); fall back to grid-crop if it fails
						var img = document.createElement("img");
						img.src = processedThumbUrl;
						img.alt = label;
						img.loading = "lazy";
						img.addEventListener("error", function () {
							if (thumbUrl && !thumb.classList.contains("cf-thumb-grid")) {
								if (img.parentNode) img.parentNode.removeChild(img);
								gridCropThumb(thumb, thumbUrl);
							}
						});
						thumb.appendChild(img);
					} else if (thumbUrl) {
						gridCropThumb(thumb, thumbUrl);
					} else {
						var wrap = document.createElement("div");
						wrap.innerHTML = CAT_SVG;
						thumb.appendChild(wrap.firstElementChild);
					}
					var span = document.createElement("span");
					var nameEl = document.createElement("i");
					nameEl.className = "cf-name";
					nameEl.textContent = label;
					span.appendChild(nameEl);
					if (origin && ORIGIN_LABEL[origin]) {
						// Where this sprite comes from, trailing the name. The name is
						// the flexible child and the badge never shrinks, so a long
						// name truncates instead of eating the badge; flex centering
						// keeps the two on the same optical line.
						var badge = document.createElement("em");
						badge.className = "cf-badge cf-badge-" + origin;
						badge.textContent = ORIGIN_LABEL[origin];
						span.appendChild(badge);
					}
					item.appendChild(thumb);
					item.appendChild(span);
					item.addEventListener("click", function () { closeMenu(); selectSprite(id ? findSprite(id) : null); });
					return item;
				}

				function renderGrid() {
					grid.innerHTML = "";
					// built-in sprites (MJ, MC) first, then the community list
					var list = getSpriteList();
					for (var i = 0; i < list.length; i++) {
						grid.appendChild(makeItem(list[i].id, list[i].name, list[i].thumbnailUrl, list[i].processedThumbnailUrl, list[i].origin));
					}
				}

				renderGrid();

				for (var i = 0; i < sizeBtns.length; i++) {
					(function (b) {
						b.addEventListener("click", function () {
							state.size = Number(b.dataset.size);
							writeStore(state);
							applySize();
							refreshHead();
						});
					})(sizeBtns[i]);
				}

				refreshHead();
				openMenu = menu;

				function closeMenu() {
					openMenu = null;
					document.body.classList.remove("cf-dark");
					if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
					if (menu.parentNode) menu.parentNode.removeChild(menu);
					if (menuKeyHandler) {
						document.removeEventListener("keydown", menuKeyHandler);
						menuKeyHandler = null;
					}
				}
				menuKeyHandler = function (e) { if (e.key === "Escape") closeMenu(); };
				document.addEventListener("keydown", menuKeyHandler);
				backdrop.addEventListener("pointerdown", closeMenu);

				// fetch the live + on-disk lists in the background; refresh the grid
				// if the menu is still open (so a sprite just dropped into
				// spriteDir appears without reopening the menu)
				Promise.all([refreshLive(), refreshLocal()]).then(function () {
					if (openMenu === menu && menu.parentNode) renderGrid();
				});

				// place the menu beside the pet (right side first, then left) so the
				// pet stays fully visible; vertical: align with the pet's top
				var rect = root.getBoundingClientRect();
				var mw = menu.offsetWidth, mh = menu.offsetHeight;
				var vw = window.innerWidth, vh = window.innerHeight;
				var left;
				if (rect.right + 8 + mw <= vw - 8) {
					left = rect.right + 8;                       // to the right
				} else if (rect.left - mw - 8 >= 8) {
					left = rect.left - mw - 8;                   // to the left
				} else {
					left = Math.max(8, Math.min(rect.left, vw - mw - 8));
				}
				var top = Math.max(8, Math.min(rect.top, vh - mh - 8));
				menu.style.left = left + "px";
				menu.style.top = top + "px";
			}

			root.addEventListener("contextmenu", function (e) {
				e.preventDefault();
				e.stopPropagation();
				buildMenu();
			});

			// ---- dispose ----------------------------------------------------
			// Registered last, once every resource exists. cordis runs the
			// returned disposer when the plugin is disabled/uninstalled (and on
			// an HMR reload, so the replacement instance can mount cleanly).
			function teardown() {
				if (tornDown) return;
				tornDown = true;   // timer wrappers become no-ops from here on
				var i;
				for (i = 0; i < ownedIntervals.length; i++) { try { clearInterval(ownedIntervals[i]); } catch (e) {} }
				for (i = 0; i < ownedTimeouts.length; i++) { try { clearTimeout(ownedTimeouts[i]); } catch (e) {} }
				for (i = 0; i < ownedRafs.length; i++) { try { _wCancelRaf.call(window, ownedRafs[i]); } catch (e) {} }
				ownedIntervals.length = 0; ownedTimeouts.length = 0; ownedRafs.length = 0;
				try { if (errorObserver && errorObserver.disconnect) errorObserver.disconnect(); } catch (e) {}
				try { if (menuKeyHandler) document.removeEventListener("keydown", menuKeyHandler); } catch (e) {}
				menuKeyHandler = null;
				// every node this plugin put on <body>/<head>: the pet itself plus
				// the context-menu layer (owned by a nested scope, so looked up)
				try {
					var stray = document.querySelectorAll(
						"body > .dsh-pando, body > .cf-menu, body > .cf-menu-backdrop, head > #dsh-pando-style"
					);
					for (i = 0; i < stray.length; i++) {
						if (stray[i].parentNode) stray[i].parentNode.removeChild(stray[i]);
					}
				} catch (e) {}
				try { document.body.classList.remove("cf-dark"); } catch (e) {}
				if (pandoRefreshSprites === refreshSpriteSources) pandoRefreshSprites = null;
			}
			try {
				if (ctx && typeof ctx.effect === "function") {
					ctx.effect(function () { return teardown; }, "pando: desktop pet");
				} else if (ctx && typeof ctx.on === "function") {
					ctx.on("dispose", teardown);
				}
			} catch (e) {}
		}
		//#endregion

		exports.apply = apply;
		return module.exports;
	}
});
