# AI_animation (web)

A browser editor for skeletal animation in the Spine 4.x JSON format, with pose templates, pose checks, timing helpers,
a docking layout and auto-rig from images. Open `index.html` (or the GitHub Pages link) on PC or phone. Work is saved in your own browser.

- Import: Project → Import (Spine JSON + atlas + PNGs, or a zip) or Open .spine. Export: Export (JSON, Binary, images, video, zip, or an animation patch).
- A project opened from a .spine file saves back as .spine in the same Spine version (Project → Save as .spine, Ctrl+Shift+S); edits the writer cannot store losslessly are listed and JSON is offered instead.
- On the website these need the PC version (`Start AI_animation`): Find across your Spine projects, Spine-rendered previews, and "Put into Spine".
- Third-party files in `vendor/`: the Spine canvas runtime and MediaPipe Tasks Vision, see `vendor/SOURCES.txt` for sources and licences.
  The Spine runtime is used only for the preview; using Spine runtimes in a product needs a Spine licence.
