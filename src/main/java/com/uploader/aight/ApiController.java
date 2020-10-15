package com.uploader.aight;

import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@CrossOrigin("*")
@RestController
public class ApiController {
  private static final Logger logger =
    LoggerFactory.getLogger(ApiController.class);

  @PostMapping(value = "/api/upload",
    consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity uploadFile(@RequestParam MultipartFile file) {

    // System.out.println("hi");

    logger.info(String.format("File name '%s' uploaded successfully.",
      file.getOriginalFilename()));

    return ResponseEntity.ok().build();
  }
}
