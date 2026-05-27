import { test as teardown } from "@playwright/test";

teardown('Removing resources', async() => {
    console.log("from global teardown - removing resources")
})