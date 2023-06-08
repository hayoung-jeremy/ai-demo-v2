export const stableDiffusionV3Img2ImgURL = "https://stablediffusionapi.com/api/v3/img2img";
export const stableDiffusionV3base64cropURL = "https://stablediffusionapi.com/api/v3/base64_crop";
export const stableDiffusionV4Img2ImgURL = "https://stablediffusionapi.com/api/v4/dreambooth/img2img";
export const stableDiffusionV4FetchQueuedImagesURL = "https://stablediffusionapi.com/api/v4/dreambooth/fetch";

export const v3DummyData = {
  key: process.env.SD_API_KEY,
  prompt: "red shoes",
  negative_prompt: null,
  init_image: "",
  width: "512",
  height: "512",
  samples: "1",
  num_inference_steps: "30",
  safety_checker: "no",
  enhance_prompt: "yes",
  guidance_scale: 7.5,
  strength: 0.7,
  seed: null,
  webhook: null,
  track_id: null,
};

export const v4DummyData = {
  key: process.env.SD_API_KEY,
  model_id: "midjourney",
  prompt: "red shoes with GUCCI logo",
  negative_prompt: null,
  init_image: "",
  width: "512",
  height: "512",
  samples: "1",
  num_inference_steps: "30",
  safety_checker: "yes",
  enhance_prompt: "yes",
  guidance_scale: 7.5,
  strength: 0.7,
  scheduler: "UniPCMultistepScheduler",
  seed: null,
  lora_model: null,
  tomesd: "yes",
  use_karras_sigmas: "yes",
  vae: null,
  lora_strength: null,
  embeddings_model: null,
  webhook: null,
  track_id: null,
};

export const easyDiffusionDummyPayload = {
  prompt: "a red shoes with Louis Vuitton Logo on it",
  seed: 12,
  used_random_seed: true,
  negative_prompt: "person",
  num_outputs: 1,
  num_inference_steps: 25,
  guidance_scale: 7.5,
  width: 512,
  height: 512,
  vram_usage_level: "balanced",
  sampler_name: "euler_a",
  use_stable_diffusion_model: "fineTunedHandbagsModel_v10",
  clip_skip: false,
  tiling: "none",
  use_vae_model: "",
  stream_progress_updates: true,
  stream_image_progress: false,
  show_only_filtered_image: true,
  block_nsfw: false,
  output_format: "png",
  output_quality: 100,
  output_lossless: false,
  metadata_output_format: "none",
  // original_prompt: "",
  active_tags: [],
  inactive_tags: [],
  init_image: "",
  prompt_strength: 0.8,
  preserve_init_image_color_profile: false,
  session_id: "1686131471882",
};
