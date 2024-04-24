import { addMatchImageSnapshotPlugin } from "cypress-image-snapshot/command";

addMatchImageSnapshotPlugin({
    failureThreshold: 0.3,
    failureThresholdType: "percent",
    customDiffConfig: { threshold: 0.1 },
    capture: "viewport",

})